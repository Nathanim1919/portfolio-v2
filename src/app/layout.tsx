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
