import "../styles/global.css";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import React from "react";
import HeaderSwitcher from "../components/HeaderSwitcher";
import FooterSwitcher from "../components/FooterSwitcher";

export const metadata = {
  title: "Planilhas Facil",
  description: "As melhores planilhas para facilitar o seu dia a dia."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
  <html lang="pt-BR">
    <body className="flex min-h-screen flex-col">
      <HeaderSwitcher />
      <main>{ children }</main>
      <FooterSwitcher />
    </body>
  </html>
  );
}