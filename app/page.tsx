import { Terminal, Lock } from "lucide-react";
import Link from "next/link";

export default function AccessClosedPage() {
  return (
    <div className="h-dvh bg-[#050505] text-white flex flex-col items-center justify-center font-mono overflow-hidden">
      
      {/* HUD Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Main Content */}
      <div className="z-10 flex flex-col items-center gap-8 p-8 border border-white/10 bg-white/[0.02] backdrop-blur-md rounded-lg shadow-2xl">
        
        {/* Icon Header */}
        <div className="flex items-center gap-3 text-cyan-400">
          <Terminal size={32} />
          <span className="tracking-[0.2em] uppercase font-bold text-sm">System_Status</span>
        </div>

        {/* The Message */}
        <div className="text-center space-y-2">
          <h1 className="text-5xl font-black tracking-tighter text-white">
            ACCESS_DENIED
          </h1>
          <p className="text-gray-400 max-w-sm">
            ROOT_ACCESS: NULL <br/>
            EARLY_ACCESS_WINDOW: [CLOSED] <br/>
            ACADEMIC_YEAR: [ARCHIVED]
          </p>
        </div>

        {/* CTA Button */}
        <Link 
          href="/" 
          className="mt-4 px-8 py-3 bg-white/5 border border-white/20 hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-xs font-bold"
        >
          Initialize_Return
        </Link>
      </div>

      {/* Footer Branding */}
      <div className="absolute bottom-8 text-[10px] text-gray-600 uppercase tracking-[0.3em]">
        GasNugas // V.2026 // Secure Node
      </div>
    </div>
  );
}