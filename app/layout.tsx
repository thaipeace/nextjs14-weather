import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { LocationContextProvider } from "@/context/ContextProvider";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Weather App",
  description: "Search the weather of city",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className
        )}
      >
        <LocationContextProvider>
          <main className="w-full flex justify-center items-center flex-col">
            <div className="container sticky z-50 bg-background top-0">
              <Navbar />
            </div>
            <div className="container">{children}</div>
          </main>
        </LocationContextProvider>
      </body>
    </html>
  );
}