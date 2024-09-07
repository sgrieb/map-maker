import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { UserProvider } from '@auth0/nextjs-auth0/client';
import NavBar from "./components/navigation/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Map Maker",
  description: "An app for making geographic lists or something.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full" lang="en">
      <UserProvider>
        <body className="h-full">
          <NavBar />
          <main className="h-3/4">
            <div className="container m-6 mx-auto text-center w-3/4 bg-neutral h-full p-5 rounded-box prose lg:prose-xl">
              {children}
            </div>
          </main>
        </body>
      </UserProvider>
    </html>
  );
}
