"use client";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { collection, query, where, getDocs } from "firebase/firestore";
import { analytics, db } from "./firebaseConfig";
import Link from "next/link";
import { BiLink } from "react-icons/bi";
import { logEvent } from "firebase/analytics";
import { StudentData, SemesterData } from "@/types/student_data";

// Define the structure of your student data

export default function Home() {
  const [nis, setNis] = useState("");
  const [loading, setLoading] = useState(false);
  const [student, setStudent] = useState<StudentData | null>(null);
  const [activeSemester, setActiveSemester] = useState<1 | 2 | 3 | 4>(4);

  useEffect(() => {
    if (analytics) {
      logEvent(analytics, "page_view", { page_title: "Home" });
    }
  }, []);

  const handleSearch = async () => {
    if (!nis) return toast.error("Please enter a NIS number");

    setLoading(true);
    setStudent(null); // Clear previous result before new search
    setActiveSemester(4);

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

  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <main className="relative h-dvh bg-[#050505] text-white flex items-center justify-center flex-col p-4 overflow-hidden">
      {/* HUD Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="z-10 flex flex-row w-full max-w-md gap-2">
        <input
          type="text"
          value={nis}
          onChange={(e) => setNis(e.target.value)}
          placeholder="Masukkan NIS disini..."
          onKeyDown={onEnter}
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
        <div className="z-10 w-full max-w-md mt-8 p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex flex-col gap-4 animate-in fade-in zoom-in duration-300 select-none">
          <div>
            <h2 className="text-2xl font-bold text-white">{student.name}</h2>
            <p className="text-white/60">NIS: {student.nis}</p>
          </div>

          {/* Semester Tabs */}
          <div className="flex gap-2 p-1 bg-white/5 rounded-lg border border-white/10">
            {[1, 2, 3, 4].map((sem) => (
              <button
                key={sem}
                onClick={() => setActiveSemester(sem as 1 | 2 | 3 | 4)}
                className={`flex-1 py-2 text-sm font-medium rounded-md cursor-pointer transition-all ${
                  activeSemester === sem
                    ? "bg-white text-black shadow-sm"
                    : "text-white/60 hover:text-white hover:bg-white/10"
                }`}
              >
                Sem {sem}
              </button>
            ))}
          </div>

          {/* Render Active Semester Data */}
          {(() => {
            const semesterKey =
              `semester_${activeSemester}` as keyof StudentData;
            const currentSemesterData = student[semesterKey] as
              | SemesterData
              | undefined;

            return (
              <div className="flex flex-col gap-3 mt-2 animate-in fade-in duration-200">
                {currentSemesterData?.diknas ? (
                  <Link
                    href={currentSemesterData.diknas}
                    target="_blank"
                    className="bg-white/10 w-full flex flex-row justify-between items-center p-4 rounded-lg font-medium hover:bg-white/20 transition-all border border-white/5"
                  >
                    Lihat Rapor Diknas
                    <BiLink size={20} />
                  </Link>
                ) : (
                  <div className="bg-white/5 w-full flex flex-row justify-between items-center p-4 rounded-lg font-medium border border-white/5 opacity-50 cursor-not-allowed">
                    Lihat Rapor Diknas
                    <BiLink size={20} />
                  </div>
                )}

                {currentSemesterData?.jago_it ? (
                  <Link
                    href={currentSemesterData.jago_it}
                    target="_blank"
                    className="bg-white/10 w-full flex flex-row justify-between items-center p-4 rounded-lg font-medium hover:bg-white/20 transition-all border border-white/5"
                  >
                    Lihat Rapor Jago IT
                    <BiLink size={20} />
                  </Link>
                ) : (
                  <div className="bg-white/5 w-full flex flex-row justify-between items-center p-4 rounded-lg font-medium border border-white/5 opacity-50 cursor-not-allowed">
                    Lihat Rapor Jago IT
                    <BiLink size={20} />
                  </div>
                )}

                {currentSemesterData?.pinter_ngaji ? (
                  <Link
                    href={currentSemesterData.pinter_ngaji}
                    target="_blank"
                    className="bg-white/10 w-full flex flex-row justify-between items-center p-4 rounded-lg font-medium hover:bg-white/20 transition-all border border-white/5"
                  >
                    Lihat Rapor Pinter Ngaji
                    <BiLink size={20} />
                  </Link>
                ) : (
                  <div className="bg-white/5 w-full flex flex-row justify-between items-center p-4 rounded-lg font-medium border border-white/5 opacity-50 cursor-not-allowed">
                    Lihat Rapor Pinter Ngaji
                    <BiLink size={20} />
                  </div>
                )}
              </div>
            );
          })()}
        </div>
      )}

      <p className="z-10 absolute bottom-5 opacity-50">
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
