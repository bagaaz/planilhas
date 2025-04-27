"use client"

import { ReactNode, PropsWithChildren } from "react"
import { usePathname } from "next/navigation";
import Footer from "../sections/Footer";
import FooterOdonto from "../sections/odonto/FooterOdonto";
import FooterConstruction from "../sections/construction/FooterConstruction";

export default function FooterSwitcher({ children }: PropsWithChildren) {
  const path = usePathname();

  if (path.startsWith("/odonto")) {
    return (
      <>
        { children }
        <FooterOdonto />
      </>
    );
  }

  if (path.startsWith("/construction")) {
    return (
      <>
        { children }
        <FooterConstruction />
      </>
    );
  }

  return (
    <>
      { children }
      <Footer />
    </>
  );
}
