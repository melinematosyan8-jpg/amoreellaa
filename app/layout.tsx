import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amoreellaa | Վեբ հրավիրատոմսեր",
  description: "Նուրբ և յուրահատուկ վեբ հրավիրատոմսեր ձեր կարևոր օրերի համար։",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hy">
      <body>{children}</body>
    </html>
  );
}
