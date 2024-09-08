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
          <main>
            <div className="container text-center bg-neutral rounded-box prose lg:prose-xl p-12 m-auto mt-12 mb-12">
              {children}
            </div>
          </main>
        </body>
      </UserProvider>
    </html>
  );
}
