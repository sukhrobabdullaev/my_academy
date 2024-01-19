import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar";
import Sidebar from "@/components/shared/sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import NextTransitionBar, { nprogress } from "next-transition-bar";

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
          <NextTransitionBar
            // color="green"
            // initialPosition={0.08}
            // trickleSpeed={200}
            // height={1}
            // trickle={true}
            showSpinner={false}
            // easing="ease"
            speed={200}
            // shadow="0 0 10px #29d, 0 0 5px #29d"
            // template='<div class="bar" role="bar"><div class="peg"></div></div>
            //           <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
            // zIndex={1600}
            // showAtBottom={false}
            // isRTL={false}
            // nonce={undefined}
            // transformCSS={(css) => <style nonce={undefined}>{css}</style>}
          />
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
