export default function Sidebar() {
  return (
    <aside className="bg-white p-6 rounded-md border border-gray-200 shadow-sm flex-shrink-0 w-full md:w-80">
      <div className="mb-6">
        <h4 className="text-xl font-semibold text-[#D72638] border-b-2 border-[#FFC857] pb-2 mb-4">Pesquise em Nosso Diretório</h4>
        <input type="text" className="w-full p-2 border border-gray-300 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-[#D72638]" placeholder="Pesquisar…" />
        <button className="w-full bg-[#D72638] text-white py-2 rounded-md transition-colors duration-300 hover:bg-red-700">
          Pesquisar
        </button>
      </div>
      <div>
        <h4 className="text-xl font-semibold text-[#D72638] border-b-2 border-[#FFC857] pb-2 mb-4">Categorias Destacadas</h4>
        <ul className="list-none m-0 p-0">
          <li className="mb-2"><a href="/pizza-coupons">Cupons de Pizza</a></li>
          <li className="mb-2"><a href="/pizza-recipes">Receitas de Pizza</a></li>
          <li className="mb-2"><a href="/local-pizzeria">Pizzarias Locais</a></li>
        </ul>
      </div>
    </aside>
  );
}