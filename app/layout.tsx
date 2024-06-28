import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { LocationContextProvider } from "@/context/ContextProvider";
import Navbar from "@/components/Navbar";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Weather Forecast",
  description: "",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className
        )}
      >
        <LocationContextProvider>
          <main className="flex min-h-screen flex-col items-center gap-y-10 lg:px-24">
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