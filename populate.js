import admin from "firebase-admin";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
// Use the 'with' attribute for JSON imports in Node 22
import serviceAccount from "./serviceAccountKey.json" with { type: "json" };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

function parseCSV(filePath) {
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const lines = fileContent.split(/\r?\n/).filter((line) => line.trim().length > 0);
  if (lines.length === 0) return [];

  const headers = lines[0].split(",").map((h) => h.trim());
  const data = [];

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    // Split by comma
    const rowValues = line.split(",").map((v) => v.trim().replace(/^"|"$/g, ""));

    const row = {};
    headers.forEach((header, index) => {
      row[header] = rowValues[index] || null;
    });
    data.push(row);
  }
  return data;
}

const csvFilePath = path.join(__dirname, "data.csv");
if (!fs.existsSync(csvFilePath)) {
  console.error("❌ data.csv not found. Please create one based on template.csv");
  process.exit(1);
}

const rawStudents = parseCSV(csvFilePath);

const students = rawStudents.map((row) => {
  const student = {
    nis: row.nis,
    name: row.name,
  };

  [1, 2, 3, 4].forEach((sem) => {
    const diknas = row[`sem${sem}_diknas`];
    const jago_it = row[`sem${sem}_jago_it`];
    const pinter_ngaji = row[`sem${sem}_pinter_ngaji`];

    // Only add the semester object if at least one field is provided
    if (diknas || jago_it || pinter_ngaji) {
      student[`semester_${sem}`] = {
        diknas: diknas || null,
        jago_it: jago_it || null,
        pinter_ngaji: pinter_ngaji || null,
      };
    }
  });

  return student;
});

async function uploadData() {
  console.log(`🚀 Starting upload of ${students.length} students to Firestore...`);
  const batch = db.batch();

  students.forEach((student) => {
    // Using NIS as doc ID ensures no duplicates
    const docRef = db.collection("students").doc(student.nis);
    batch.set(docRef, student);
  });

  try {
    await batch.commit();
    console.log("✅ Successfully populated students collection!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error uploading data: ", error);
    process.exit(1);
  }
}

uploadData();
