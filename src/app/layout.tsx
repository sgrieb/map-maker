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
    <html lang="en">
      <UserProvider>
        <body>
          <NavBar />
          <main>
            <div className="container m-6 mx-aut text-center">
              {children}
            </div>
          </main>
        </body>
      </UserProvider>
    </html>
  );
}
