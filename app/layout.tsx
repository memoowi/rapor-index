import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "XI RPL Rapor Index",
  description: "Rapor Index for XI RPL by Memoowi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <div className="max-w-7xl mx-auto">{children}</div>
        <Toaster
          position="top-center"
          toastOptions={{
            error: {
              duration: 3000,
              style: {
                // Semi-transparent red background
                background: "rgba(255, 0, 0, 0.1)",
                // The "Glass" effect
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)", // Safari support
                // Light border to define the edges
                border: "1px solid rgba(255, 255, 255, 0.1)",
                // Shadow for depth
                boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
                color: "#fff",
                borderRadius: "12px",
              },
            },
          }}
        />
      </body>
    </html>
  );
}
