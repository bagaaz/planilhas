import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-orange-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Controle Total dos Custos da Sua Obra
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl">
              Economize tempo e dinheiro com a planilha mais completa para gerenciar sua reforma ou construção.
              Chega de surpresas no orçamento!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#comprar"
                className="inline-flex h-12 items-center justify-center rounded-md bg-orange-600 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-orange-700 focus:outline-none focus:ring-orange-500 focus:ring-offset-2"
              >
                Garantir Minha Planilha
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="#recursos"
                className="inline-flex h-12 items-center justify-center rounded-md border border-gray-200 bg-white px-6 py-3 text-base font-medium transition-colors hover:bg-gray-100 focus:outline-none focus:ring-orange-500 focus:ring-offset-2"
              >
                Ver Recursos
              </Link>
            </div>
          </div>
          <div className="mx-auto lg:mx-0 relative">
            <div className="absolute -top-4 -right-4 bg-orange-600 text-white text-sm font-bold py-2 px-4 rounded-full rotate-6">
              Economize até 30% na sua obra!
            </div>
            <Image
              src="/images/obra.png"
              width={450}
              height={450}
              alt="Planilha de controle de custos"
              className="mx-auto overflow-hidden rounded-xl object-cover object-center shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}