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
        nis: "2440622012",
        name: "Afrah Matsna Ardiansyah",
        diknas: "https://drive.google.com/file/d/1rsSxpkBE2ChsL44jeMUVLLlmXnQYLE_X/view?usp=drive_link",
        jago_it: "https://drive.google.com/file/d/1ii90k9_cOGreRGxvcMs8sJXmeTKHhhe3/view?usp=drive_link",
        pinter_ngaji: "https://drive.google.com/file/d/1vxaiRBvGtqyO00eTgXzma_emdMRmX1Pv/view?usp=drive_link"
    },
    {
        nis: "2440622047",
        name: "Azrililfadli An Nahl Aqleyca",
        diknas: "https://drive.google.com/file/d/1VknxW2H3_v8k0GMPtOnPERPURIAa7CYP/view?usp=drive_link",
        jago_it: "https://drive.google.com/file/d/1fN6evXfeN0HylZAMr4J8Nk3ppBWs6Se5/view?usp=drive_link",
        pinter_ngaji: "https://drive.google.com/file/d/1l16ZNJJEQqLuWq3OtLsSyV4-7EmYAtVH/view?usp=drive_link"
    },
    {
        nis: "2440622050",
        name: "Balakoswa Raja Malaikha",
        diknas: "https://drive.google.com/file/d/1H_hKzs7-ud_HX6OdZKjhjsFkgYJRCuxf/view?usp=drive_link",
        jago_it: "https://drive.google.com/file/d/1UzON3Kmx_xfGEL2rnUJSWsul30e3l8-9/view?usp=drive_link",
        pinter_ngaji: "https://drive.google.com/file/d/1VWX04_a17H3d9j3GP8mhCNGjEpboPJkY/view?usp=drive_link"
    },
    {
        nis: "2440622056",
        name: "Danish Ubaidillah Ramadhan",
        diknas: "https://drive.google.com/file/d/18gBZfhEq4zsvj-2qmMZTk4uj8fs87yGZ/view?usp=drive_link",
        jago_it: "https://drive.google.com/file/d/1EwqPort9XERgPmsRBhzumLdaAcRzNxOS/view?usp=drive_link",
        pinter_ngaji: "https://drive.google.com/file/d/18vesoC3Uk6JrizAVoBsF-wrI_bTSlhPM/view?usp=drive_link"
    },
    {
        nis: "2440622070",
        name: "Faeyza Yudistira",
        diknas: "https://drive.google.com/file/d/1Pm_4ZxaRDl_QQJjQCfRmTDJbiaGOYf4E/view?usp=drive_link",
        jago_it: "https://drive.google.com/file/d/1RIM8EZWvWdQci3mqv7lJKHULd-h9T3-o/view?usp=drive_link",
        pinter_ngaji: "https://drive.google.com/file/d/1JFDwxuK726wsTpIrsJ5fnb_OfkRUHdx_/view?usp=drive_link"
    },
    {
        nis: "2440622097",
        name: "Izzan Athmar Muhammad",
        diknas: "https://drive.google.com/file/d/15vwQ1IKLgIEleIuFe2QMRnCOYBGBO3z9/view?usp=drive_link",
        jago_it: "https://drive.google.com/file/d/11g_FnBw3FJ_sWOZQ8F1bzuuwpXxSPcqp/view?usp=drive_link",
        pinter_ngaji: "https://drive.google.com/file/d/1S_3-qQlkBBNbaC4MMpIpf-1Wz9MF7Pmn/view?usp=drive_link"
    },
    {
        nis: "2440622114",
        name: "M Ziad Abdel Razzaq",
        diknas: "https://drive.google.com/file/d/1g-868IjS-74KkeymaErZ0MfarffU8dyb/view?usp=drive_link",
        jago_it: "https://drive.google.com/file/d/1LxU_2r8p2SERkYaFJXed31FWuAZ2UgZJ/view?usp=drive_link",
        pinter_ngaji: "https://drive.google.com/file/d/1fMB1ZYJJzSuL1l7JKAND-lgkgqGedeq2/view?usp=drive_link"
    },
    {
        nis: "2440622130",
        name: "Mufty Arifuddin Taqy",
        diknas: "https://drive.google.com/file/d/1C5lD4V9yH7EIwQ1n3VSqsWdDK-oOo1Ma/view?usp=drive_link",
        jago_it: "https://drive.google.com/file/d/1d789k8FnaSvYViVItzk-U7686iae0MiN/view?usp=drive_link",
        pinter_ngaji: "https://drive.google.com/file/d/1LZxG8ScPZMNCkXrTqOsAwLuznoDH9wap/view?usp=drive_link"
    },
    {
        nis: "2440622131",
        name: "Muhamad Parisz Hidayat",
        diknas: "https://drive.google.com/file/d/1KGuGfMdUJ_r5RGYaWcUfpNx5CNTR99c6/view?usp=drive_link",
        jago_it: "https://drive.google.com/file/d/1aAleTGh0J4jdj7wFfYES83vtABDiqJZZ/view?usp=drive_link",
        pinter_ngaji: "https://drive.google.com/file/d/1QGxp4MoNw87DsXq02fcSC2TCBIoDkNLI/view?usp=drive_link"
    },
    {
        nis: "2440622153",
        name: "Muhammad Rafa Firdaus Mardhika",
        diknas: "https://drive.google.com/file/d/16laFzmXliWCKj25oxicIxvJGi0P2FI8o/view?usp=drive_link",
        jago_it: "https://drive.google.com/file/d/1H-48wWGTmua64091_LygcdBWyqO2_2--/view?usp=drive_link",
        pinter_ngaji: "https://drive.google.com/file/d/1HW3MnExSpNLm3_JKI-naQi2Z0CG5_Sy9/view?usp=drive_link"
    },
    {
        nis: "2440622154",
        name: "Muhammad Rafie Aswandi",
        diknas: "https://drive.google.com/file/d/1WTIzDpy_1nkzohAbOhFUjywKo7GbTlFU/view?usp=drive_link",
        jago_it: "https://drive.google.com/file/d/14VAbUG_vmMPzJD9oeDqpCzQdkd_T1uoZ/view?usp=drive_link",
        pinter_ngaji: "https://drive.google.com/file/d/1pmy6EK4TsOROX_8DrIJVbvNCehBZYefu/view?usp=drive_link"
    },
    {
        nis: "2440622163",
        name: "Nabihan Uthman Raziq",
        diknas: "https://drive.google.com/file/d/1w8M5EvHCXB3KjSJQ-K1EVkdCDcwBxnQG/view?usp=drive_link",
        jago_it: "https://drive.google.com/file/d/1Ni2iGkApocVLsuKVxhdCm7oPnQHEhb2a/view?usp=drive_link",
        pinter_ngaji: "https://drive.google.com/file/d/1ala3Ppa2SscZ6ajqgxAEHp1YGbtpJTGe/view?usp=drive_link"
    },
    {
        nis: "2440622173",
        name: "Nayaka Ihsan Muttaqin",
        diknas: "https://drive.google.com/file/d/1UiA-bMIgSLNRWg4lkIOCRB9L18cqMvYN/view?usp=drive_link",
        jago_it: "https://drive.google.com/file/d/1_Ij406tI4-yOOnayITx_KC6VcR1Ima-8/view?usp=drive_link",
        pinter_ngaji: "https://drive.google.com/file/d/1P7K-oe5OpwfZ8iygRx-9axxCrSz_lJJs/view?usp=drive_link"
    },
    {
        nis: "2440622229",
        name: "Oh Hyun Bin",
        diknas: "https://drive.google.com/file/d/17v1NRHO-2Js8kktDkft8zO0QRbzeR42k/view?usp=drive_link",
        jago_it: "https://drive.google.com/file/d/1-lNlVpWUkp-HA7PJDOFLYdDNoDokQQOF/view?usp=drive_link",
        pinter_ngaji: "https://drive.google.com/file/d/1Gor5XAAwSr4kef4S1YPDoZFDmJbtmXlS/view?usp=drive_link"
    },
    {
        nis: "2440622191",
        name: "Raihan Nazhiif Yudhistira",
        diknas: "https://drive.google.com/file/d/1PiR6ABVbYb25_2XcipGjHZJU3XxjTrls/view?usp=drive_link",
        jago_it: "https://drive.google.com/file/d/1_UaTNIhvPupGFk6KztPD42oe0AIs7I4F/view?usp=drive_link",
        pinter_ngaji: "https://drive.google.com/file/d/10er5aRnIkmSZf_7Hprh97Fe5Bd2HKQPp/view?usp=drive_link"
    },
    {
        nis: "2440622214",
        name: "Yazid",
        diknas: "https://drive.google.com/file/d/1AWMGFbgnkoxvssMy1GTcONSC1EDvBr5U/view?usp=drive_link",
        jago_it: "https://drive.google.com/file/d/1xTiQmbcit9oYzc1WmXijsuS_MbpUizx7/view?usp=drive_link",
        pinter_ngaji: "https://drive.google.com/file/d/1Rq3xeEbrOSNJ-6eMtkPQ5EA9u0nZZxLX/view?usp=drive_link"
    },
    {
        nis: "2440622215",
        name: "Yazid Achmad Alhasir",
        diknas: "https://drive.google.com/file/d/1R_BEKo6Gecx7TdqN9RaDKOOLlAikZwgP/view?usp=drive_link",
        jago_it: "https://drive.google.com/file/d/1-qXwL-mKgM--Iq18fz54tTwt-o3wKdjD/view?usp=drive_link",
        pinter_ngaji: "https://drive.google.com/file/d/17oTB9XiNINA61Aaw50tTacNq9BHbUnTJ/view?usp=drive_link"
    },
    {
        nis: "2440622217",
        name: "Yusuf Altaf Alfaruq Atmaja Rosadi",
        diknas: "https://drive.google.com/file/d/1eKWa3g2L_tT2ZJ1vLQpd7HHaMdH9WW_t/view?usp=drive_link",
        jago_it: "https://drive.google.com/file/d/11wBC6Y08NHoyaISLlNv00ysbE2zTdFDO/view?usp=drive_link",
        pinter_ngaji: "https://drive.google.com/file/d/1ik8uN9OKK7Wwz7EBd18Vq7P9CYKJE-Ct/view?usp=drive_link"
    },
    {
        nis: "2440622219",
        name: "Zainul Arkaan Al Insi",
        diknas: "https://drive.google.com/file/d/1lSSDMSx4aKnlbnkrKXrj9fTKMwMABrpA/view?usp=drive_link",
        jago_it: "https://drive.google.com/file/d/1okmNhMN8to-MIXpNHjnl4fLEqqARorIH/view?usp=drive_link",
        pinter_ngaji: "https://drive.google.com/file/d/1GuSy6L4UQWvbSarozibLbxtTsGrD5F_I/view?usp=drive_link"
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