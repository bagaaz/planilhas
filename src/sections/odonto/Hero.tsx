import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-teal-50 to-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Simplifique a Gestão Financeira do seu Consultório Odontológico
            </h1>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Calcule custos, defina preços justos e aumente a lucratividade do seu consultório com nossa planilha
              completa e fácil de usar.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="#comprar"
                className="inline-flex h-12 items-center justify-center rounded-md bg-teal-600 px-6 py-3 text-base font-medium text-white shadow transition-colors hover:bg-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
              >
                Adquirir Agora
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="mx-auto lg:ml-auto">
            <Image
              src="/images/dentista.png"
              alt="Planilha para Consultórios Odontológicos"
              width={400}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}