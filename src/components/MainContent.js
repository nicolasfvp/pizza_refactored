export default function MainContent() {
  const articles = [
    { title: 'A Máquina de Vendas de Pizza', content: 'A maioria dos estudantes universitários acharia uma máquina de vendas de pizza boa demais para ser verdade…', link: '/the-pizza-vending-machine' },
    { title: 'Massa de Pizza Feita de Couve-Flor', content: 'O desejo de comer de forma mais saudável em geral é uma tendência, mas o amor das pessoas por pizza é…', link: '/pizza-crust-made-from-cauliflower' },
  ];

  return (
    <main className="flex-grow min-w-80">
      <h3 className="text-2xl font-semibold text-[#D72638] border-b-2 border-[#FFC857] pb-2 mb-4">Artigos Recentes</h3>
      {articles.map((article, index) => (
        <article key={index} className="mb-6">
          <h4 className="text-xl font-medium"><a href={article.link}>{article.title}</a></h4>
          <p className="text-lg text-gray-700">{article.content}</p>
        </article>
      ))}
    </main>
  );
}