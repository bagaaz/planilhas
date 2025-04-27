"use client"

import { ReactNode, PropsWithChildren } from "react"
import { usePathname } from "next/navigation";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import HeaderOdonto from "../sections/odonto/HeaderOdonto";
import HeaderContruction from "../sections/construction/HeaderContruction";

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

  if (path.startsWith("/construction")) {
    return (
      <>
        <HeaderContruction />
        { children }
      </>
    )
  }

  return (
    <>
      <Header />
      { children }
    </>
  );
}