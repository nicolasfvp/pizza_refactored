import Header from '@/components/Header';
import Nav from '@/components/Nav';
import FeaturedSection from '@/components/FeaturedSection';
import MainContent from '@/components/MainContent';
import Footer from '@/components/Footer';
import PizzaChains from '@/components/PizzaChains';
import FeaturedCategories from '@/components/FeaturedCategories';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Nav />
      
      <div className="container mx-auto max-w-7xl px-4 py-8 flex flex-row-reverse">
        <div>
          <div className="flex justify-center items-center mb-8">
            <img
              src="/pizza.jpg"
              alt="imagem de pessoas fazendo pizza"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          <FeaturedSection />
          <MainContent />
        </div>

        
        
        {/* Container que alinha os novos componentes à esquerda do MainContent */}
        <div className="flex flex-wrap md:flex-row justify-center gap-6 mt-8 mr-20">
          <div className="flex flex-col gap-6 w-full md:w-80">
            <FeaturedCategories />
            <PizzaChains />
          </div>
          
        </div>

      </div>
      
      <Footer />
    </div>
  );
}