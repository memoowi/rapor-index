"use client";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { collection, query, where, getDocs } from "firebase/firestore";
import { analytics, db } from "./firebaseConfig";
import Link from "next/link";
import { BiLink } from "react-icons/bi";
import { logEvent } from "firebase/analytics";

// Define the structure of your student data
interface StudentData {
  name: string;
  nis: string;
  diknas: string;
  jago_it: string;
  pinter_ngaji: string;
}

export default function Home() {
  const [nis, setNis] = useState("");
  const [loading, setLoading] = useState(false);
  const [student, setStudent] = useState<StudentData | null>(null);

  useEffect(() => {
    if (analytics) {
      logEvent(analytics, "page_view", { page_title: "Home" });
    }
  }, []);

  const handleSearch = async () => {
    if (!nis) return toast.error("Please enter a NIS number");

    setLoading(true);
    setStudent(null); // Clear previous result before new search

    try {
      const studentsRef = collection(db, "students");
      const q = query(studentsRef, where("nis", "==", nis.trim()));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        toast.error(`Student with NIS ${nis} not found`, {
          style: {
            background: "rgba(255, 0, 0, 0.2)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            color: "#fff",
          },
        });
      } else {
        // Map Firestore document to our state
        const data = querySnapshot.docs[0].data() as StudentData;
        setStudent(data);
        if (analytics) {
          logEvent(analytics, "search_student", {
            student_name: data.name,
            student_nis: data.nis,
          });
        }
      }
    } catch (error) {
      console.error("Error searching student:", error);
      toast.error("An error occurred while searching.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="h-dvh flex items-center justify-center flex-col p-4">
      <div className="flex flex-row w-full max-w-md gap-2">
        <input
          type="text"
          value={nis}
          onChange={(e) => setNis(e.target.value)}
          placeholder="Masukkan NIS disini..."
          className="w-full p-2 rounded-md bg-white/10 border border-white/20 text-white outline-none focus:border-white/50"
        />

        <button
          onClick={handleSearch}
          disabled={loading}
          className="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-200 transition-colors disabled:opacity-50 font-semibold"
        >
          {loading ? "..." : "Submit"}
        </button>
      </div>

      {/* Conditional Rendering: Only show if student state is not null */}
      {student && (
        <div className="w-full max-w-md mt-8 p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex flex-col gap-4 animate-in fade-in zoom-in duration-300">
          <div>
            <h2 className="text-2xl font-bold text-white">{student.name}</h2>
            <p className="text-white/60">NIS: {student.nis}</p>
          </div>

          <div className="flex flex-col gap-3">
            <Link
              href={student.diknas}
              target="_blank"
              className="bg-white/10 w-full flex flex-row justify-between items-center p-4 rounded-lg font-medium hover:bg-white/20 transition-all border border-white/5"
            >
              Lihat Rapor Diknas
              <BiLink size={20} />
            </Link>

            <Link
              href={student.jago_it}
              target="_blank"
              className="bg-white/10 w-full flex flex-row justify-between items-center p-4 rounded-lg font-medium hover:bg-white/20 transition-all border border-white/5"
            >
              Lihat Rapor Jago IT
              <BiLink size={20} />
            </Link>

            <Link
              href={student.pinter_ngaji}
              target="_blank"
              className="bg-white/10 w-full flex flex-row justify-between items-center p-4 rounded-lg font-medium hover:bg-white/20 transition-all border border-white/5"
            >
              Lihat Rapor Pinter Ngaji
              <BiLink size={20} />
            </Link>
          </div>
        </div>
      )}

      <p className="absolute bottom-5 opacity-50">
        Built by{" "}
        <Link
          href="https://github.com/memoowi"
          target="_blank"
          className="hover:text-sky-400"
        >
          Memoowi
        </Link>
      </p>
    </main>
  );
}
