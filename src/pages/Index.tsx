import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [currentAbout, setCurrentAbout] = useState(0);
  const [currentDelivery, setCurrentDelivery] = useState(0);
  const catalogRef = useRef<HTMLDivElement>(null);
  const [catalogScroll, setCatalogScroll] = useState(0);

  const products = [
    {
      name: 'Чак-чак медовый',
      price: '2 500 ₽',
      image: 'https://cdn.poehali.dev/projects/0b4f3417-1454-4eae-913e-00acf639d79d/files/4bd3baf3-6206-4696-9277-d8d26f157083.jpg'
    },
    {
      name: 'Халва узбекская',
      price: '1 800 ₽',
      image: 'https://cdn.poehali.dev/projects/0b4f3417-1454-4eae-913e-00acf639d79d/files/4f4513a0-0dc5-43fe-9fe5-bf9ec43811f8.jpg'
    },
    {
      name: 'Нават кристаллический',
      price: '3 200 ₽',
      image: 'https://cdn.poehali.dev/projects/0b4f3417-1454-4eae-913e-00acf639d79d/files/4f4513a0-0dc5-43fe-9fe5-bf9ec43811f8.jpg'
    },
    {
      name: 'Пахлава фисташковая',
      price: '2 900 ₽',
      image: 'https://cdn.poehali.dev/projects/0b4f3417-1454-4eae-913e-00acf639d79d/files/4bd3baf3-6206-4696-9277-d8d26f157083.jpg'
    }
  ];

  const aboutSlides = [
    {
      title: '100% натуральные ингредиенты',
      text: 'Только отборные орехи, мёд и традиционные рецепты из Узбекистана'
    },
    {
      title: 'Семейные рецепты',
      text: 'Технологии приготовления передаются из поколения в поколение'
    },
    {
      title: 'Ручная работа',
      text: 'Каждая сладость создаётся с любовью нашими мастерами'
    },
    {
      title: 'Свежесть гарантирована',
      text: 'Изготавливаем партии каждую неделю специально для вас'
    }
  ];

  const deliverySlides = [
    {
      title: 'Быстрая доставка',
      text: 'По Москве — за 2 часа, по России — 2-3 дня'
    },
    {
      title: 'Бережная упаковка',
      text: 'Специальная термоупаковка сохранит свежесть'
    },
    {
      title: 'Отслеживание заказа',
      text: 'Получите трек-номер сразу после отправки'
    }
  ];

  const reviews = [
    { name: 'Анна К.', text: 'Невероятно вкусно! Настоящий восток!', rating: 5 },
    { name: 'Михаил Р.', text: 'Заказываю регулярно. Качество супер', rating: 5 },
    { name: 'Елена С.', text: 'Лучшая халва что пробовала', rating: 5 },
    { name: 'Дмитрий П.', text: 'Отличная упаковка и быстрая доставка', rating: 5 },
    { name: 'Ольга Т.', text: 'Подарили на праздник — все в восторге!', rating: 5 },
    { name: 'Игорь В.', text: 'Настоящий вкус детства', rating: 5 }
  ];

  useEffect(() => {
    const handleCatalogScroll = () => {
      if (catalogRef.current) {
        const scrollLeft = catalogRef.current.scrollLeft;
        const itemWidth = catalogRef.current.scrollWidth / products.length;
        setCatalogScroll(Math.round(scrollLeft / itemWidth));
      }
    };

    const catalog = catalogRef.current;
    if (catalog) {
      catalog.addEventListener('scroll', handleCatalogScroll);
      return () => catalog.removeEventListener('scroll', handleCatalogScroll);
    }
  }, [products.length]);

  return (
    <div className="min-h-screen bg-[#FFF8DC]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#8B4513] shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="relative">
              <h1 className="text-5xl font-bold text-[#D4AF37] tracking-wider drop-shadow-lg">
                ASTORI
              </h1>
              <div className="absolute -top-1 -right-2 w-3 h-3 bg-[#D4AF37] rounded-full animate-pulse"></div>
            </div>
            <nav className="flex gap-8 text-[#FFF8DC]">
              <a href="#catalog" className="hover:text-[#D4AF37] transition-colors font-medium">Каталог</a>
              <a href="#about" className="hover:text-[#D4AF37] transition-colors font-medium">О нас</a>
              <a href="#delivery" className="hover:text-[#D4AF37] transition-colors font-medium">Доставка</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <div className="relative inline-block">
            <h2 className="text-8xl font-bold text-[#8B4513] mb-4 relative">
              Восточные
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-32 h-32 opacity-20">
                <svg viewBox="0 0 100 100" className="animate-float">
                  <path d="M50 10 C30 30, 20 50, 50 90 C80 50, 70 30, 50 10" fill="#D4AF37" />
                </svg>
              </div>
            </h2>
            <h2 className="text-8xl font-bold text-[#8B4513] mb-6">сладости</h2>
            <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
          </div>
          <p className="text-xl text-[#8B4513] mt-8 max-w-2xl mx-auto">
            Традиционные узбекские деликатесы с доставкой по всей России
          </p>
          <Button className="mt-8 bg-[#D4AF37] hover:bg-[#B8941F] text-[#8B4513] font-semibold px-8 py-6 text-lg rounded-full shadow-xl">
            Выбрать сладости
          </Button>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-5xl font-bold text-[#8B4513] text-center mb-12">Наш каталог</h3>
          
          <div className="relative">
            <div
              ref={catalogRef}
              className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth pb-8"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {products.map((product, index) => (
                <Card key={index} className="min-w-[350px] snap-center bg-[#FFF8DC] border-2 border-[#D4AF37] p-6 hover:shadow-2xl transition-shadow">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                  <h4 className="text-2xl font-bold text-[#8B4513] mb-2">{product.name}</h4>
                  <p className="text-3xl font-bold text-[#D4AF37] mb-4">{product.price}</p>
                  <Button className="w-full bg-[#8B4513] hover:bg-[#6D3510] text-white rounded-full py-6">
                    Добавить в корзину
                  </Button>
                </Card>
              ))}
            </div>

            {/* Animated Character */}
            <div 
              className="absolute bottom-0 transition-all duration-500 ease-out"
              style={{ 
                left: `${(catalogScroll * 25) + 10}%`,
                transform: 'translateX(-50%)'
              }}
            >
              <img
                src="https://cdn.poehali.dev/projects/0b4f3417-1454-4eae-913e-00acf639d79d/files/572fad81-3d3a-44c6-b981-8bb7ac9c25f5.jpg"
                alt="Mascot"
                className="w-24 h-24 object-contain animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Slides */}
      <section id="about" className="py-20 bg-[#FFF8DC]">
        <div className="container mx-auto px-6">
          <h3 className="text-5xl font-bold text-[#8B4513] text-center mb-12">О бренде ASTORI</h3>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl p-12 shadow-2xl border-4 border-[#D4AF37] min-h-[300px] relative">
              <div className="animate-fade-in" key={currentAbout}>
                <h4 className="text-3xl font-bold text-[#8B4513] mb-6">{aboutSlides[currentAbout].title}</h4>
                <p className="text-xl text-[#8B4513]/80">{aboutSlides[currentAbout].text}</p>
              </div>
              
              <div className="flex gap-3 justify-center mt-8">
                {aboutSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentAbout(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentAbout ? 'bg-[#D4AF37] w-8' : 'bg-[#D4AF37]/30'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="flex gap-4 justify-center mt-6">
              <Button
                onClick={() => setCurrentAbout((prev) => (prev - 1 + aboutSlides.length) % aboutSlides.length)}
                className="bg-[#8B4513] hover:bg-[#6D3510] text-white rounded-full px-6"
              >
                <Icon name="ChevronLeft" size={24} />
              </Button>
              <Button
                onClick={() => setCurrentAbout((prev) => (prev + 1) % aboutSlides.length)}
                className="bg-[#8B4513] hover:bg-[#6D3510] text-white rounded-full px-6"
              >
                <Icon name="ChevronRight" size={24} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section id="delivery" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-5xl font-bold text-[#8B4513] text-center mb-12">Доставка</h3>
          
          <div className="max-w-3xl mx-auto relative">
            <div className="bg-[#FFF8DC] rounded-3xl p-12 shadow-2xl border-4 border-[#D4AF37] min-h-[300px]">
              <div className="animate-fade-in" key={currentDelivery}>
                <h4 className="text-3xl font-bold text-[#8B4513] mb-6">{deliverySlides[currentDelivery].title}</h4>
                <p className="text-xl text-[#8B4513]/80">{deliverySlides[currentDelivery].text}</p>
              </div>
              
              <div className="flex gap-3 justify-center mt-8">
                {deliverySlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentDelivery(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentDelivery ? 'bg-[#8B4513] w-8' : 'bg-[#8B4513]/30'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Animated Character for Delivery */}
            <div 
              className="absolute -bottom-12 transition-all duration-500"
              style={{ left: `${(currentDelivery * 33) + 33}%` }}
            >
              <img
                src="https://cdn.poehali.dev/projects/0b4f3417-1454-4eae-913e-00acf639d79d/files/572fad81-3d3a-44c6-b981-8bb7ac9c25f5.jpg"
                alt="Mascot"
                className="w-28 h-28 object-contain animate-float"
              />
            </div>

            <div className="flex gap-4 justify-center mt-16">
              <Button
                onClick={() => setCurrentDelivery((prev) => (prev - 1 + deliverySlides.length) % deliverySlides.length)}
                className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#8B4513] rounded-full px-6"
              >
                <Icon name="ChevronLeft" size={24} />
              </Button>
              <Button
                onClick={() => setCurrentDelivery((prev) => (prev + 1) % deliverySlides.length)}
                className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#8B4513] rounded-full px-6"
              >
                <Icon name="ChevronRight" size={24} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section - Chaotic Layout */}
      <section className="py-20 bg-[#FFF8DC] overflow-hidden">
        <div className="container mx-auto px-6">
          <h3 className="text-5xl font-bold text-[#8B4513] text-center mb-16">Отзывы клиентов</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card
                key={index}
                className="bg-white p-6 border-2 border-[#D4AF37] shadow-lg hover:shadow-2xl transition-all hover:scale-105 hover:rotate-1"
                style={{
                  transform: `rotate(${index % 2 === 0 ? '2deg' : '-2deg'})`,
                  marginTop: `${(index % 3) * 20}px`
                }}
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-[#D4AF37] text-xl">★</span>
                  ))}
                </div>
                <p className="text-[#8B4513] mb-3 italic">"{review.text}"</p>
                <p className="text-[#8B4513] font-semibold">— {review.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#8B4513] text-[#FFF8DC] py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h4 className="text-2xl font-bold text-[#D4AF37] mb-4">ASTORI</h4>
              <p className="text-sm opacity-90">Восточные сладости премиум качества</p>
            </div>
            <div>
              <h5 className="font-semibold mb-3 text-[#D4AF37]">Контакты</h5>
              <p className="text-sm mb-2">📞 +7 (495) 123-45-67</p>
              <p className="text-sm mb-2">✉️ info@astori.ru</p>
              <p className="text-sm">📍 Москва, ул. Восточная, 12</p>
            </div>
            <div>
              <h5 className="font-semibold mb-3 text-[#D4AF37]">Социальные сети</h5>
              <div className="flex gap-4 justify-center md:justify-start">
                <a href="#" className="hover:text-[#D4AF37] transition-colors">
                  <Icon name="Instagram" size={24} />
                </a>
                <a href="#" className="hover:text-[#D4AF37] transition-colors">
                  <Icon name="Facebook" size={24} />
                </a>
                <a href="#" className="hover:text-[#D4AF37] transition-colors">
                  <Icon name="MessageCircle" size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-[#D4AF37]/30">
            <p className="text-sm opacity-75">© 2024 ASTORI. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
