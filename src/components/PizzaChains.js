export default function PizzaChains() {
  const chains = [
    "Dominos Pizza",
    "California Pizza Kitchen",
    "Pizza Hut",
    "Little Caesars Pizza",
    "Papa Johns Online"
  ];

  return (
    <div className="bg-white p-6 rounded-md border border-gray-200 shadow-sm">
      <h3 className="text-2xl font-semibold text-[#b4202e] mb-4">Encontre as Pizzarias Perto de Você</h3>
      <ul className="list-none m-0 p-0 space-y-2">
        {chains.map((chain, index) => (
          <li key={index} className="flex items-center gap-2 text-gray-700 hover:text-[#b4202e] transition-colors duration-300">
            <span className="text-xs text-[#b4202e] mt-1">▶️</span>
            <a href={`/find-pizza?chain=${chain}`} className="hover:underline">{chain}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}