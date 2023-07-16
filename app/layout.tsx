import "./globals.css";
import type { Metadata } from "next";
// import { Inter } from 'next/font/google'
import { Nunito } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/Modal";
const nunito = Nunito({
  subsets: ["latin"],
});
// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Airbnb",
  description:
    "Airbnb: Vacation Rentals, Cabins, Beach Houses, Unique Homes & Experiences",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ClientOnly>
          <Modal
            isOpen={true}
            actionLabel="Submit"
            secondaryActionLabel="Cancel"
            title="Hello World"
          />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
