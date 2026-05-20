import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Yug Patel | AI & Full Stack Developer",
  description: "Portfolio of Yug Patel, a Computer Science student at IIIT Surat specializing in AI-powered applications, computer vision systems, and modern web development.",
  keywords: [
    "Yug Patel",
    "IIIT Surat",
    "AI Developer",
    "Full Stack Developer",
    "Computer Vision",
    "FastAPI",
    "React",
    "YOLOv8",
    "OpenCV",
    "WebSockets",
    "MediaPipe"
  ],
  authors: [{ name: "Yug Patel" }],
  creator: "Yug Patel",
};

export const viewport = {
  themeColor: "#0B0F19",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="bg-[#0B0F19] text-[#F9FAFB] font-sans antialiased min-h-screen selection:bg-blue-500/30 selection:text-blue-200">
        {children}
      </body>
    </html>
  );
}
