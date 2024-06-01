import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SidebarDesktop, SidebarMobile } from "@/components/sidebar/"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid min-h-screen w-full md:grid-cols-[200px_1fr] lg:grid-cols-[200px_1fr]">
          <SidebarDesktop />
          <div className="flex flex-col">
            <SidebarMobile /> 
            <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
