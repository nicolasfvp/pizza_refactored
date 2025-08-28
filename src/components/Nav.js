import React from 'react';
import { FaHome } from "react-icons/fa";
import { LuPizza, LuMapPin, LuChefHat, LuNewspaper, LuGamepad } from 'react-icons/lu';

export default function Nav() {
  const links = [
    { name: 'Página Inicial', href: '/', icon: <FaHome className="w-8 h-8" /> },
    { name: 'Pedir Pizza', href: '/order-pizza', icon: <LuPizza className="w-8 h-8" /> },
    { name: 'Encontrar Pizzaria', href: '/find-pizza', icon: <LuMapPin className="w-8 h-8" /> },
    { name: 'Receitas', href: '/pizza-recipes', icon: <LuChefHat className="w-8 h-8" /> },
    { name: 'Notícias', href: '/pizza-news', icon: <LuNewspaper className="w-8 h-8" /> },
    { name: 'Jogos', href: '/pizza-games', icon: <LuGamepad className="w-8 h-8" /> },
  ];

  return (
    <nav className="bg-[#ddad4cff] rounded-2xl shadow-xl px-4 py-3">
      <ul className="flex flex-col md:flex-row justify-center items-center py-3 gap-4 md:gap-6 list-none m-0 p-0">
        {links.map((link) => (
          <li key={link.name}>
            <a 
              href={link.href} 
              className="flex flex-col md:flex-row items-center gap-1.5 md:gap-2 text-white font-bold uppercase text-xs sm:text-sm h-auto px-2 md:px-3 py-2 hover:bg-[#FFC857] hover:text-[#1E1E1E] rounded-full transition-colors duration-300"
            >
              {link.icon}
              <span className="hidden md:inline">{link.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
