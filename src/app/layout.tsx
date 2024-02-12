import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar";
import Sidebar from "@/components/shared/sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import NextTransitionBar from "next-transition-bar";
// import NextBreadcrumb from "@/components/shared/breadcrump";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { AppWrapper } from "@/context";

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
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <AppWrapper>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <NextTransitionBar color="#3bc43f" height={2} speed={200} />
              {/* <NextBreadcrumb
                homeElement={"Home"}
                separator={<span> &gt; </span>}
                activeClasses="text-amber-500"
                containerClasses="flex py-5"
                listClasses="hover:underline mx-2 font-bold"
                capitalizeLinks
              /> */}
              <div className="flex flex-col">
                <Navbar />
                <div className="flex flex-1 mt-14">
                  <Sidebar />
                  <main className="flex-1 p-6">{children}</main>
                </div>
              </div>
            </ThemeProvider>
          </AppWrapper>
        </body>
      </html>
    </ClerkProvider>
  );
}
