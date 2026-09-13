import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceMono = Space_Mono({ 
  weight: ["400", "700"],
  subsets: ["latin"], 
  variable: "--font-space" 
});

export const metadata: Metadata = {
  title: "Salif Muneer C P | Cyber Security & SOC Analyst | OSCP",
  description: "Cybersecurity professional & M.Sc. Computer Science graduate specializing in SOC operations, penetration testing, network traffic analysis, and intelligent anomaly detection.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceMono.variable} antialiased bg-black text-white selection:bg-cyan-500/30 selection:text-cyan-200`}
      >
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
