import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              O que nossos clientes dizem
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
              Centenas de dentistas já transformaram a gestão financeira de seus consultórios.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm">
            <div className="space-y-2">
              <div className="flex items-center gap-0.5">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              </div>
              <p className="text-gray-500">
                "Finalmente consigo entender quanto custa cada procedimento e definir preços justos. Minha
                lucratividade aumentou em 30%!"
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-gray-100 p-1">
                <div className="h-8 w-8 rounded-full bg-gray-300" />
              </div>
              <div>
                <p className="font-medium">Dra. Ana Silva</p>
                <p className="text-sm text-gray-500">Clínica Odontológica Sorrisos</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm">
            <div className="space-y-2">
              <div className="flex items-center gap-0.5">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              </div>
              <p className="text-gray-500">
                "Essa planilha é um divisor de águas para meu consultório. Agora sei exatamente quanto custa cada
                material e procedimento."
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-gray-100 p-1">
                <div className="h-8 w-8 rounded-full bg-gray-300" />
              </div>
              <div>
                <p className="font-medium">Dr. Carlos Oliveira</p>
                <p className="text-sm text-gray-500">Odonto Premium</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm">
            <div className="space-y-2">
              <div className="flex items-center gap-0.5">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              </div>
              <p className="text-gray-500">
                "Fácil de usar e extremamente completa. Consegui organizar toda a parte financeira do consultório em
                poucos dias."
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-gray-100 p-1">
                <div className="h-8 w-8 rounded-full bg-gray-300" />
              </div>
              <div>
                <p className="font-medium">Dra. Mariana Santos</p>
                <p className="text-sm text-gray-500">Clínica Dental Care</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}