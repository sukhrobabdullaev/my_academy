import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar";
import Sidebar from "@/components/shared/sidebar";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Academy",
  description: "Sukhrob Academy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col">
            <Navbar />
            <div className="flex flex-1 mt-14">
              <Sidebar />
              <main className="flex-1 p-4">{children}</main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
