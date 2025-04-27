import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-600 text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Não perca mais tempo e dinheiro
            </h2>
            <p className="mx-auto max-w-[700px] text-orange-100 md:text-xl/relaxed">
              Comece agora mesmo a controlar os custos da sua obra e economize milhares de reais.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#comprar"
              className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 py-3 text-base font-medium text-orange-600 transition-colors hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-600"
            >
              Garantir Minha Planilha
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="#depoimentos"
              className="inline-flex h-12 items-center justify-center rounded-md border border-white bg-transparent px-8 py-3 text-base font-medium text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-600"
            >
              Ver Depoimentos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}