import type { Metadata } from "next";
import { Inter, Courier_Prime } from "next/font/google";
import "./globals.css";
import ApolloContextProvider from "./providers/apollo";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const inter = Inter({ subsets: ["latin"] });
const courierPrime = Courier_Prime({
  subsets: ["latin"],
  variable: "--font-courier-prime",
  weight: "400",
});
const courierPrimeBold = Courier_Prime({
  subsets: ["latin"],
  variable: "--font-courier-prime-bold",
  weight: "700",
});

export const metadata: Metadata = {
  title: "Yahtzen Shop",
  description: "Yahtzen's collection of cool stuff to buy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${courierPrime.variable} ${courierPrimeBold.variable}`}
      >
        <ApolloContextProvider>{children}</ApolloContextProvider>
      </body>
    </html>
  );
}
