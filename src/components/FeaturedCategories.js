export default function FeaturedCategories() {
  const categories = [
    {
      image: "/cupons.jpg",
      title: "Cupons de Pizza",
      description: "Encontre ótimas ofertas em pizza hoje à noite!"
    },
    {
      image: "/receitas.jpg",
      title: "Receitas de Pizza",
      description: "Receitas de pizza rápidas e fáceis!"
    },
    {
      image: "/pizzarias.jpg",
      title: "Pizzaria Local",
      description: "Pizzaria local ao seu alcance!"
    },
  ];

  return (
    <div className="bg-white p-6 rounded-md border border-gray-200 shadow-sm mb-6">
      <h3 className="text-2xl font-semibold text-[#b4202e] mb-4">Categorias em Destaque</h3>
      <div className="space-y-4">
        {categories.map((category, index) => (
          <div key={index} className="flex items-center gap-4 border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
            <img 
              src={category.image} 
              alt={category.title} 
              className="w-20 h-20 rounded-md object-cover" 
            />
            <div>
              <h4 className="text-lg font-medium text-[#b4202e]">{category.title}</h4>
              <p className="text-gray-700">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}