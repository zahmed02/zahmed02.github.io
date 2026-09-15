import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zubair Ahmed | Computer Science and Applied AI",
  description:
    "Software developer focused on scalable systems, applied AI, and meaningful technology. Computer Science student at FAST-NUCES, Karachi.",
  keywords: [
    "Zubair Ahmed",
    "software developer",
    "applied AI",
    "systems engineering",
    "FAST NUCES",
  ],
  authors: [{ name: "Zubair Ahmed", url: "https://zahmed02.github.io" }],
  creator: "Zubair Ahmed",
  openGraph: {
    title: "Zubair Ahmed | Computer Science and Applied AI",
    description: "Software developer focused on scalable systems and applied AI.",
    url: "https://zahmed02.github.io",
    siteName: "Zubair Ahmed",
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#08090b",
  colorScheme: "dark",
  userScalable: true,
}; 

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
