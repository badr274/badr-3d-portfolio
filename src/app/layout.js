import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import FireFliesBackground from "../components/FireFliesBackground";
import Sound from "../components/Sound";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Badr Mohamed | Frontend Developer (React & Next.js)",
  description:
    "I'm Badr Mohamed, a frontend developer specializing in building fast, responsive, and modern web applications using React and Next.js. Welcome to my portfolio.",
  icons: {
    icon: "/favico.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="hydrated">
      <body
        className={`${inter.className}  antialiased bg-background text-foreground`}
        cz-shortcut-listen="true"
      >
        {children}
        <FireFliesBackground />
        <Sound />
        <div id="my-modal" />
      </body>
    </html>
  );
}
