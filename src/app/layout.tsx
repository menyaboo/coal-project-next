import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import { FooterComponent, HeaderComponent } from "@/widgets/layout";
import "./globals.css";
import Provider from "@/app/_providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Доставка угля из Кузбасса в Томской области",
  description: "Быстрая и надежная доставка качественного угля из Кузбасса в Томскую область и Кемеровскую область. " +
    "Гарантируем высокое качество и конкурентные цены. Свяжитесь с нами для заказа и консультации.",
  keywords: "доставка угля, уголь, качественный уголь, Томск, Томская область, Кемерово, Кемеровская область",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider>
        <body className={inter.className}>
          <HeaderComponent/>
            {children}
          <FooterComponent/>
        </body>
      </Provider>
    </html>
  );
}
