import Link from "next/link";

export default function CTA() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Pronto para otimizar seu trabalho?
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Escolha a planilha ideal para suas necessidades e comece a economizar tempo hoje mesmo
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link
              href="/planilhas"
              className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
            >
              Ver Todas as Planilhas
            </Link>
            <Link
              href="/contato"
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-300 bg-white px-8 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
            >
              Fale Conosco
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}