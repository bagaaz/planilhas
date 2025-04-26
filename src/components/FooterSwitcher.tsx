"use client"

import { ReactNode, PropsWithChildren } from "react"
import { usePathname } from "next/navigation";
import Footer from "../sections/Footer";
import FooterOdonto from "../sections/odonto/FooterOdonto";

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

  return (
    <>
      { children }
      <Footer />
    </>
  );
}
