import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";


const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk", 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nathanim",
  description: "Living Mind Portfolio",
  icons: {
    icon: "/logo.jpg?v=1",
    shortcut: "/logo.jpg?v=1",
    apple: "/logo.jpg?v=1",
  },
  openGraph: {
    title: "Nathanim - Full Stack Engineer",
    description: "Living Mind Portfolio - Showcasing projects, skills, and experience.",
    url: "https://portfolio-v2-self-gamma.vercel.app/",
    siteName: "Nathanim Portfolio",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Nathanim Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nathanim - Full Stack Engineer",
    description: "Living Mind Portfolio - Showcasing projects, skills, and experience.",
    images: ["/logo.jpg"],
    creator: "@NathanimTadele",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} antialiased bg-[#f6f4f4] dark:bg-[#050505] text-zinc-900 dark:text-zinc-100 overflow-hidden transition-colors duration-300`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
