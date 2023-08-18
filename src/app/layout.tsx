import "./globals.css";
import type { Metadata } from "next";
import Footer from "./Components/Footer/page";
import Header from "./Components/Header/page";

export const metadata: Metadata = {
  title: "TheClickerClub",
  description: "A Blog exploring wildlife through the medium of photography",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
