import type { Metadata } from "next";
import localFont from "next/font/local";
import { Exo } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import ReactQueryClientProvider from "@/utils/ReactQueryClientProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const exo = Exo({ subsets: ["latin"] });

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Admin | Lotto Now Now - Play the Lottery Online",
  description: "Play the lottery online with Lotto Now Now.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${exo.className}`}
      >
        <ReactQueryClientProvider>
          {children}

          <Toaster
            richColors
            position="top-right"
            toastOptions={{
              duration: 3000,
              closeButton: true,
            }}
          />
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
