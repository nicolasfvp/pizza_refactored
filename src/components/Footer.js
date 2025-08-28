export default function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-white text-center py-4 text-sm mt-8">
      <div className="mb-2">
        <a href="/sitemap" className="text-white hover:underline mx-2">Mapa do Site</a> |
        <a href="/privacy-policy" className="text-white hover:underline mx-2">Política de Privacidade</a> |
        <a href="/about-us" className="text-white hover:underline mx-2">Sobre Nós</a>
      </div>
      <p>&copy; 2025 Pizza.com</p>
    </footer>
  );
}