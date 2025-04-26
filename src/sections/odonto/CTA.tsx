import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-16 md:py-24 bg-teal-600 text-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Transforme a gestão financeira do seu consultório hoje
            </h2>
            <p className="mx-auto max-w-[700px] md:text-xl/relaxed opacity-90">
              Não perca mais tempo com planilhas complicadas ou precificação imprecisa. Comece agora mesmo!
            </p>
          </div>
          <Link
            href="#comprar"
            className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 py-3 text-base font-medium text-teal-600 shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white/20 transition-colors"
          >
            Adquirir por apenas R$ 39,90
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}