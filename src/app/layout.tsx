import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar/Navbar";
import Header from "@/components/header/Header";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "portfolio | RK",
  description: "my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full w-full">
      <body className={`${sora.className} h-full w-full`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="dark:bg-slate-950 bg-slate-300 h-full w-full">
            <Header />
            <Navbar />
            <div className="min-h-[30rem] md:min-h-[40rem] flex items-center justify-center w-full pb-24">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
