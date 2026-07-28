import { Terminal } from "lucide-react";
import Link from "next/link";

export default function AccessClosedPage() {
  return (
    <div className="h-dvh bg-[#050505] text-white flex flex-col items-center justify-center font-mono overflow-hidden">
      {/* HUD Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Main Content */}
      <div className="z-10 flex flex-col items-center gap-4 p-8 border border-white/10 bg-white/[0.02] backdrop-blur-md rounded-lg shadow-2xl">
        {/* Icon Header */}
        <div className="flex items-center gap-3 text-cyan-400">
          <Terminal size={18} />
          <span className="tracking-[0.2em] uppercase font-bold text-xs">
            System_Status
          </span>
        </div>

        {/* The Message */}
        <div className="text-center space-y-2">
          <svg
            width="144"
            height="144"
            viewBox="0 0 144 144"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto size-24 mb-4 opacity-50"
          >
            <path
              d="M0,142L8,142L8,144L0,144L0,142ZM28,142L32,142L32,144L28,144L28,142ZM96,142L104,142L104,144L96,144L96,142ZM80,100L76,100L76,114L72,114L72,120L68,120L68,124L64,124L64,140L68,140L68,144L60,144L60,132L56,132L56,128L52,128L52,132L48,132L48,136L44,136L44,140L48,140L48,144L40,144L40,128L36,128L36,124L32,124L32,120L28,120L28,116L24,116L24,112L20,112L20,88L24,88L24,96L28,96L28,100L32,100L32,104L40,104L40,100L44,100L44,96L50,96L50,92L56,92L56,88L60,88L60,62L64,62L64,58L96,58L96,62L100,62L100,80L80,80L80,84L92,84L92,88L76,88L76,96L84,96L84,104L80,104L80,100ZM82,140L84,140L84,142L82,142L82,140ZM12,136L20,136L20,138L12,138L12,136ZM110,134L116,134L116,136L110,136L110,134ZM0,128L32,128L32,130L0,130L0,128ZM72,128L128,128L128,130L72,130L72,128ZM68,64L68,68L72,68L72,64L68,64Z"
              stroke="none"
              fill="#fff"
            />
          </svg>
          <h1 className="text-3xl font-black tracking-wide text-white">
            ACCESS_DENIED
          </h1>
          <p className="text-gray-400 text-sm max-w-sm">
            ROOT_ACCESS: NULL <br />
            EARLY_ACCESS_WINDOW: [CLOSED] <br />
            ACADEMIC_YEAR: [ARCHIVED]
          </p>
        </div>

        {/* CTA Button */}
        <Link
          href="/"
          className="mt-4 px-8 py-3 bg-white/5 border border-white/20 hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-xs font-bold"
        >
          Initialize_Reboot
        </Link>
      </div>

      {/* Footer Branding */}
      <div className="absolute bottom-8 text-[10px] text-gray-600 uppercase tracking-[0.3em]">
        GasNugas // V.2026 // Secure Node
      </div>
    </div>
  );
}
