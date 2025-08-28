import { MdOutlineDeliveryDining } from "react-icons/md";

export default function FeaturedSection() {
  return (
    <section className="max-w-7xl mx-auto my-8 bg-[#FFF0F0] border-l-4 border-[#D72638] px-8 py-6 rounded-md">
      <h2 className="text-[#D72638] text-3xl font-bold mb-4">Amantes de Pizza, Bem-Vindos!</h2>
      <p className="text-xl mb-4">Encontre as melhores pizzarias locais, explore receitas deliciosas e peça sua fatia favorita, tudo em um só lugar.</p>
      <a href="/order-pizza" className="flex flex-row max-w-fit bg-[#D72638] text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300 hover:bg-red-700 ">
      <MdOutlineDeliveryDining className="h-6 w-6 mr-4"/>
        Peça Agora
      </a>
    </section>
  );
}