export default function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              O que nossos clientes dizem
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Veja como nossas planilhas têm ajudado profissionais como você
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow">
            <div className="space-y-2">
              <h3 className="font-bold">Carlos Silva</h3>
              <p className="text-sm text-gray-500">Engenheiro Civil</p>
            </div>
            <div className="pt-4">
              <p className="text-gray-500">
                "A planilha de controle de custos de construção me ajudou a economizar 15% no orçamento do meu último
                projeto. Recomendo a todos os engenheiros."
              </p>
            </div>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow">
            <div className="space-y-2">
              <h3 className="font-bold">Dra. Ana Oliveira</h3>
              <p className="text-sm text-gray-500">Dentista</p>
            </div>
            <div className="pt-4">
              <p className="text-gray-500">
                "Finalmente consigo entender o custo real dos meus procedimentos. Isso mudou completamente a forma
                como precificar meus serviços."
              </p>
            </div>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow">
            <div className="space-y-2">
              <h3 className="font-bold">Marcos Pereira</h3>
              <p className="text-sm text-gray-500">Arquiteto</p>
            </div>
            <div className="pt-4">
              <p className="text-gray-500">
                "Planilhas intuitivas e bem estruturadas. Facilitou muito o controle financeiro dos meus projetos."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}