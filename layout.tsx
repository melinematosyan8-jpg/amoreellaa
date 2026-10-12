import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amoreellaa — Վեբ հրավիրատոմսեր",
  description: "Պատվիրեք առցանց հրավիրատոմս ցանկացած միջոցառման համար՝ հարսանիք, նշանադրություն, ծննդյան տարեդարձ, մկրտություն և այլ առիթներ։",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="hy"><body>{children}</body></html>;
}
