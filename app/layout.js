import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MD Mohayminul Islam Rayhan | Frontend Developer",
  description:
    "Portfolio of MD Mohayminul Islam Rayhan (Rayhan) — Frontend Developer & Computer Science and Engineering student at Dhaka International University, Bangladesh. Specializing in React, Next.js, and clean, responsive UI engineering.",
  keywords: [
    "MD Mohayminul Islam Rayhan",
    "Rayhan",
    "Frontend Developer",
    "React Developer",
    "Next.js Portfolio",
    "Bangladesh Developer",
    "Dhaka International University",
    "Tailwind CSS",
  ],
  authors: [{ name: "MD Mohayminul Islam Rayhan", url: "https://github.com/mohayminul94" }],
  creator: "MD Mohayminul Islam Rayhan",
  openGraph: {
    title: "MD Mohayminul Islam Rayhan | Frontend Developer",
    description:
      "Frontend developer and CSE student passionate about building clean, responsive, and user-focused web experiences with React, Next.js, and Tailwind CSS.",
    url: "https://rayhan.dev",
    siteName: "Rayhan Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MD Mohayminul Islam Rayhan | Frontend Developer",
    description:
      "Frontend developer and CSE student passionate about building clean, responsive, and user-focused web experiences with React, Next.js, and Tailwind CSS.",
  },
};

export const viewport = {
  themeColor: "#202734",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#202734] text-[#F8FAFC] antialiased selection:bg-[#B7D894] selection:text-[#131924]">
        {children}
      </body>
    </html>
  );
}
