export default function Header() {
  return (
    <header className="bg-gradient-to-r from-[#ddbb77ff] to-[#b4202e] text-white flex flex-col md:flex-row justify-around items-center py-6 px-4">
      <div className="flex flex-col md:flex-row items-center gap-4">
        <img
          src="/logo.png"
          alt="Logo do Pizza.com"
          className="h-12 w-auto"
        />
      </div>
      <div className="flex items-center mt-4 md:mt-0 relative">
        <input 
          type="text" 
          className="w-full md:w-64 p-2 pl-10 border border-gray-300 bg-white text-black opacity-75 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFC857] text-dark" 
          placeholder="Pesquisar..." 
        />
        <svg 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          width="20" 
          height="20" 
          fill="currentColor"
        >
          <path d="M23.707 22.293l-5.969-5.969a10.016 10.016 0 10-1.414 1.414l5.969 5.969a1 1 0 001.414-1.414zM10 18a8 8 0 110-16 8 8 0 010 16z"/>
        </svg>
      </div>
    </header>
  );
}