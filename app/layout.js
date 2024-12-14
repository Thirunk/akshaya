import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";

import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

import "@/app/_styles/globals.css";

export const metadata = {
  title: {
    template: "%s / Akshay Embroidery Works",
    default: "Welcome / Akshaya Thread World",
  },
  description: "Embroidery designs ",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
