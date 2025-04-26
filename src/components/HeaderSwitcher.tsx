"use client"

import { ReactNode, PropsWithChildren } from "react"
import { usePathname } from "next/navigation";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import HeaderOdonto from "../sections/odonto/HeaderOdonto";

export default function HeaderSwitcher({ children }: PropsWithChildren) {
  const path = usePathname();

  if (path.startsWith("/odonto")) {
    return (
      <>
        <HeaderOdonto />
        { children }
      </>
    );
  }

  return (
    <>
      <Header />
      { children }
    </>
  );
}