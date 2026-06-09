import admin from "firebase-admin";
// Use the 'with' attribute for JSON imports in Node 22
import serviceAccount from "./serviceAccountKey.json" with { type: "json" };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// ... the rest of your students array ...

const students = [
  {
    nis: "2440622006",
    name: "Abrisam Rafif Maulana",
    diknas: null,
    jago_it: "https://drive.google.com/file/d/1Yw7ZDy8HHf5pH_V2qjrih86SQzJ61cLQ/view?usp=drive_link",
    pinter_ngaji: null,
  },
  {
    nis: "2440622012",
    name: "Afrah Matsna Ardiansyah",
    diknas: null,
    jago_it: "https://drive.google.com/file/d/1Q-XKi80suggxVTaPxLE-XzZX8FSMLxAP/view?usp=drive_link",
    pinter_ngaji: null,
  },
  {
    nis: "2440622047",
    name: "Azrililfadli An Nahl Aqleyca",
    diknas: null,
    jago_it: "https://drive.google.com/file/d/1rCMD07kbRZnXxJTRxOR906zpOOvCXxtW/view?usp=drive_link",
    pinter_ngaji: null,
  },
  {
    nis: "2440622050",
    name: "Balakoswa Raja Malaikha",
    diknas: null,
    jago_it: "https://drive.google.com/file/d/11k38QrzxqZh-5Tn4iwLzTW-dKRGELSVl/view?usp=drive_link",
    pinter_ngaji: null,
  },
  {
    nis: "2440622056",
    name: "Danish Ubaidillah Ramadhan",
    diknas: null,
    jago_it: "https://drive.google.com/file/d/1k0YlX79kDDGNP3Qg_HTdpagqNGxaliYc/view?usp=drive_link",
    pinter_ngaji: null,
  },
  {
    nis: "2440622070",
    name: "Faeyza Yudistira",
    diknas: null,
    jago_it: "https://drive.google.com/file/d/1yhMSi8ULM4TuyPVAGb_73C68RqK6nZ-2/view?usp=drive_link",
    pinter_ngaji: null,
  },
  {
    nis: "2440622097",
    name: "Izzan Athmar Muhammad",
    diknas: null,
    jago_it: "https://drive.google.com/file/d/1aOgV_Wd4gfUQipqBu_xPHp_KoDhYARp3/view?usp=drive_link",
    pinter_ngaji: null,
  },
  {
    nis: "2440622114",
    name: "M Ziad Abdel Razzaq",
    diknas: null,
    jago_it: "https://drive.google.com/file/d/1RIPDUL3SZnDZpYG96uvsZBuNxtj9C8jK/view?usp=drive_link",
    pinter_ngaji: null,
  },
  {
    nis: "2440622130",
    name: "Mufty Arifuddin Taqy",
    diknas: null,
    jago_it: "https://drive.google.com/file/d/1_tILZvBGh0HXpUnHYmIBdNftZ2VUgY3f/view?usp=drive_link",
    pinter_ngaji: null,
  },
  {
    nis: "2440622131",
    name: "Muhamad Parisz Hidayat",
    diknas: null,
    jago_it: "https://drive.google.com/file/d/1b3U6p52Od5Uow0f1YHTIQ29vbjWq1Pdu/view?usp=drive_link",
    pinter_ngaji: null,
  },
  {
    nis: "2440622153",
    name: "Muhammad Rafa Firdaus Mardhika",
    diknas: null,
    jago_it: "https://drive.google.com/file/d/1Z5BugssJ5MN2mADT4N1sTPrabVAgcQah/view?usp=drive_link",
    pinter_ngaji: null,
  },
  {
    nis: "2440622154",
    name: "Muhammad Rafie Aswandi",
    diknas: null,
    jago_it: "https://drive.google.com/file/d/1LOJyIZ2M4wgc3lsYdMACNMsBrz9w29FA/view?usp=drive_link",
    pinter_ngaji: null,
  },
  {
    nis: "2440622163",
    name: "Nabihan Uthman Raziq",
    diknas: null,
    jago_it: "https://drive.google.com/file/d/1W4wJhBAdWuiGNYdM50JkYd27drpega3t/view?usp=drive_link",
    pinter_ngaji: null,
  },
  {
    nis: "2440622173",
    name: "Nayaka Ihsan Muttaqin",
    diknas: null,
    jago_it: "https://drive.google.com/file/d/1cq1_IlHp9R_YEWT4XHOv9Yu5YMM_NecK/view?usp=drive_link",
    pinter_ngaji: null,
  },
  {
    nis: "2440622229",
    name: "Oh Hyun Bin",
    diknas: null,
    jago_it: "https://drive.google.com/file/d/1x-aXjVv7miEUtgP6KwsUhRSgDb_EUWsB/view?usp=drive_link",
    pinter_ngaji: null,
  },
  {
    nis: "2440622191",
    name: "Raihan Nazhiif Yudhistira",
    diknas: null,
    jago_it: "https://drive.google.com/file/d/1FchXDs4SsuqxUEPaOVc4ws_UkzU9dAML/view?usp=drive_link",
    pinter_ngaji: null,
  },
  {
    nis: "2440622214",
    name: "Yazid",
    diknas: null,
    jago_it: "https://drive.google.com/file/d/1l5C1dllwbWPMVDmRGhp6RhxPnTUpBUPB/view?usp=drive_link",
    pinter_ngaji: null,
  },
  {
    nis: "2440622215",
    name: "Yazid Achmad Alhasir",
    diknas: null,
    jago_it: "https://drive.google.com/file/d/1OnajIB5aC7yrJwDuwXjALr-RK-y-1yVI/view?usp=drive_link",
    pinter_ngaji: null,
  },
  {
    nis: "2440622217",
    name: "Yusuf Altaf Alfaruq Atmaja Rosadi",
    diknas: null,
    jago_it: "https://drive.google.com/file/d/1vvDCfEoS3Y8gjrWQnQw6sCA2LU-Gn6RB/view?usp=drive_link",
    pinter_ngaji: null,
  },
  {
    nis: "2440622219",
    name: "Zainul Arkaan Al Insi",
    diknas: null,
    jago_it: "https://drive.google.com/file/d/1X5f3BqeaXcrrmfxLX5aQT34jvJ6PLtzD/view?usp=drive_link",
    pinter_ngaji: null,
  },
];

async function uploadData() {
  console.log("🚀 Starting upload to Firestore...");
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
