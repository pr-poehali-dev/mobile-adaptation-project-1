import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const NavLinks = () => (
    <>
      <button onClick={() => scrollToSection('about')} className="text-white/90 hover:text-cyan-400 transition-colors text-sm md:text-base w-full text-left md:w-auto md:text-center">О нас</button>
      <button onClick={() => scrollToSection('menu')} className="text-white/90 hover:text-cyan-400 transition-colors text-sm md:text-base w-full text-left md:w-auto md:text-center">Меню</button>
      <button onClick={() => scrollToSection('advantages')} className="text-white/90 hover:text-cyan-400 transition-colors text-sm md:text-base w-full text-left md:w-auto md:text-center">Преимущества</button>
      <button onClick={() => scrollToSection('reviews')} className="text-white/90 hover:text-cyan-400 transition-colors text-sm md:text-base w-full text-left md:w-auto md:text-center">Отзывы</button>
      <button onClick={() => scrollToSection('booking')} className="text-white/90 hover:text-cyan-400 transition-colors text-sm md:text-base w-full text-left md:w-auto md:text-center">Контакты</button>
    </>
  );

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <header className="fixed top-0 w-full bg-zinc-950/95 backdrop-blur-md z-50 border-b border-zinc-800">
        <nav className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
          <h1 className="text-lg md:text-2xl font-bold text-cyan-400">WAVES BAR</h1>
          
          <div className="hidden md:flex gap-8 items-center">
            <NavLinks />
          </div>

          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white h-9 w-9">
                <Icon name="Menu" size={20} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-zinc-900 border-zinc-800 w-[280px]">
              <div className="flex flex-col gap-6 mt-8">
                <NavLinks />
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </header>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-0">
        <div className="absolute inset-0 grid grid-cols-3 md:grid-cols-3">
          <div 
            className="relative bg-cover bg-center"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80)' }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div 
            className="relative bg-cover bg-center"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1536935338788-846bb9981813?w=800&q=80)' }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div 
            className="relative bg-cover bg-center"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1587223075055-82e9a937ddff?w=800&q=80)' }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-zinc-950/50 to-zinc-950" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 tracking-wider drop-shadow-2xl" style={{ textShadow: '0 0 30px rgba(6, 182, 212, 0.5)' }}>
            WAVES BAR
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 md:mb-12 max-w-2xl mx-auto drop-shadow-lg">
            Каждодневно покоряем океаном и пляжными коктейлями
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            <Button 
              onClick={() => scrollToSection('menu')}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 md:py-5 text-base md:text-lg rounded-full w-full sm:w-auto shadow-lg shadow-cyan-500/30"
            >
              Меню
            </Button>
            <Button 
              onClick={() => scrollToSection('booking')}
              variant="outline"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-500/20 px-8 py-4 md:py-5 text-base md:text-lg rounded-full w-full sm:w-auto backdrop-blur-sm"
            >
              Забронировать
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-12 md:py-20 px-4 bg-zinc-900/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-6 md:mb-8">
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-4xl md:text-5xl mx-auto">
                🌊
              </div>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">О НАС</h3>
            <p className="text-base md:text-lg text-white/60 max-w-3xl mx-auto leading-relaxed px-4">
              Каждодневно покоряем океаном и пляжными коктейлями. Мы предлагаем не просто напитки, а полноценные истории тропических вечеров и ремаркейских вечеров с живой музыкой. Наша цель — создать атмосферу, где каждый коктейль получает овации от моря.
            </p>
          </div>
        </div>
      </section>

      <section id="menu" className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-center">НАШЕ МЕНЮ</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
            <Card className="bg-zinc-900 border-cyan-500/30 overflow-hidden hover:border-cyan-500/60 transition-all group">
              <div className="aspect-square bg-gradient-to-br from-blue-600 to-cyan-400 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-6xl md:text-7xl">🍸</div>
              </div>
              <div className="p-4 md:p-6">
                <h4 className="text-lg md:text-xl font-bold mb-2">Blue Lagoon</h4>
                <p className="text-xs md:text-sm text-white/60 mb-3">Водка, Blue Curaçao, лимонад</p>
                <p className="text-cyan-400 font-bold text-base md:text-lg">450₽</p>
              </div>
            </Card>

            <Card className="bg-zinc-900 border-cyan-500/30 overflow-hidden hover:border-cyan-500/60 transition-all group">
              <div className="aspect-square bg-gradient-to-br from-purple-600 to-pink-400 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-6xl md:text-7xl">🍹</div>
              </div>
              <div className="p-4 md:p-6">
                <h4 className="text-lg md:text-xl font-bold mb-2">Mojito Royal</h4>
                <p className="text-xs md:text-sm text-white/60 mb-3">Ром, мята, лайм, содовая</p>
                <p className="text-cyan-400 font-bold text-base md:text-lg">420₽</p>
              </div>
            </Card>

            <Card className="bg-zinc-900 border-cyan-500/30 overflow-hidden hover:border-cyan-500/60 transition-all group sm:col-span-2 lg:col-span-1">
              <div className="aspect-square bg-gradient-to-br from-orange-600 to-red-400 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-6xl md:text-7xl">🥃</div>
              </div>
              <div className="p-4 md:p-6">
                <h4 className="text-lg md:text-xl font-bold mb-2">Sunset Beach</h4>
                <p className="text-xs md:text-sm text-white/60 mb-3">Текила, апельсин, гренадин</p>
                <p className="text-cyan-400 font-bold text-base md:text-lg">480₽</p>
              </div>
            </Card>
          </div>

          <div className="text-center">
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 md:px-8 py-4 md:py-5 text-sm md:text-base rounded-lg">
              Смотреть полное меню
            </Button>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-12 md:py-20 px-4 bg-zinc-900/50">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-center">ПРЕИМУЩЕСТВА</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <Card className="bg-zinc-900 border-cyan-500/20 p-5 md:p-8 hover:border-cyan-500/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Icon name="Waves" size={24} className="md:w-7 md:h-7" />
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold mb-2">Эксклюзивная рецептура коктейлей</h4>
                  <p className="text-sm md:text-base text-white/60">с местными ингредиентами</p>
                </div>
              </div>
            </Card>

            <Card className="bg-zinc-900 border-cyan-500/20 p-5 md:p-8 hover:border-cyan-500/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Icon name="Music" size={24} className="md:w-7 md:h-7" />
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold mb-2">Живые DJ-сеты</h4>
                  <p className="text-sm md:text-base text-white/60">с тропической музыкой, погружающей в атмосферу океанского бриза</p>
                </div>
              </div>
            </Card>

            <Card className="bg-zinc-900 border-cyan-500/20 p-5 md:p-8 hover:border-cyan-500/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Icon name="Users" size={24} className="md:w-7 md:h-7" />
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold mb-2">Команда опытных барменов</h4>
                  <p className="text-sm md:text-base text-white/60">прошедших обучение в лучших барах мира</p>
                </div>
              </div>
            </Card>

            <Card className="bg-zinc-900 border-cyan-500/20 p-5 md:p-8 hover:border-cyan-500/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Icon name="Wind" size={24} className="md:w-7 md:h-7" />
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold mb-2">Атмосфера океанского бриза</h4>
                  <p className="text-sm md:text-base text-white/60">уникальный дизайн интерьера</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-center">ЧТО ГОВОРЯТ О НАС</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <Card className="bg-cyan-500/10 border-cyan-500/30 p-5 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-cyan-500/30 flex items-center justify-center text-xl md:text-2xl flex-shrink-0">
                  👨
                </div>
                <div>
                  <h5 className="font-bold text-base md:text-lg">Алексей</h5>
                  <div className="flex text-cyan-400 text-sm">★★★★★</div>
                </div>
              </div>
              <p className="text-sm md:text-base text-white/70 leading-relaxed">
                "Потрясающая атмосфера и невероятные коктейли! DJ-сеты создают идеальное настроение. Обязательно вернусь снова!"
              </p>
            </Card>

            <Card className="bg-cyan-500/10 border-cyan-500/30 p-5 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-cyan-500/30 flex items-center justify-center text-xl md:text-2xl flex-shrink-0">
                  👩
                </div>
                <div>
                  <h5 className="font-bold text-base md:text-lg">Мария</h5>
                  <div className="flex text-cyan-400 text-sm">★★★★★</div>
                </div>
              </div>
              <p className="text-sm md:text-base text-white/70 leading-relaxed">
                "Лучший бар в городе! Коктейли с местными ингредиентами - это что-то особенное. Команда барменов - настоящие профессионалы."
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="booking" className="py-12 md:py-20 px-4 bg-zinc-900/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">КОНТАКТЫ</h3>
            <p className="text-sm md:text-base text-white/60">Свяжитесь с нами или забронируйте столик</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <Card className="bg-cyan-500/10 border-cyan-500/30 p-6 md:p-8">
              <div className="space-y-4 md:space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name="MapPin" className="text-cyan-400" size={20} />
                    <h4 className="font-bold text-base md:text-lg">Адрес</h4>
                  </div>
                  <p className="text-sm md:text-base text-white/70 ml-8">ул. Морская, 123, Санкт-Петербург</p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name="Phone" className="text-cyan-400" size={20} />
                    <h4 className="font-bold text-base md:text-lg">Телефон</h4>
                  </div>
                  <p className="text-sm md:text-base text-white/70 ml-8">+7 (999) 123-45-67</p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name="Clock" className="text-cyan-400" size={20} />
                    <h4 className="font-bold text-base md:text-lg">Часы работы</h4>
                  </div>
                  <div className="text-sm md:text-base text-white/70 ml-8 space-y-1">
                    <p>Пн-Чт: 18:00 - 02:00</p>
                    <p>Пт-Сб: 18:00 - 04:00</p>
                    <p>Вс: 18:00 - 00:00</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-zinc-900 border-cyan-500/20 p-6 md:p-8">
              <h4 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Забронировать столик</h4>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2.5 md:py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-cyan-500 focus:outline-none text-sm md:text-base"
                    placeholder="Ваше имя"
                  />
                </div>

                <div>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-2.5 md:py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-cyan-500 focus:outline-none text-sm md:text-base"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <input 
                    type="date" 
                    className="w-full px-3 py-2.5 md:py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-cyan-500 focus:outline-none text-xs md:text-sm"
                  />
                  <input 
                    type="time" 
                    className="w-full px-3 py-2.5 md:py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-cyan-500 focus:outline-none text-xs md:text-sm"
                  />
                </div>

                <div>
                  <select className="w-full px-4 py-2.5 md:py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-cyan-500 focus:outline-none text-sm md:text-base">
                    <option>1-2 человека</option>
                    <option>3-4 человека</option>
                    <option>5-6 человек</option>
                    <option>7+ человек</option>
                  </select>
                </div>

                <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 md:py-4 text-sm md:text-base rounded-lg">
                  Забронировать
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-zinc-950 border-t border-zinc-800 py-8 md:py-10 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <h4 className="text-lg md:text-xl font-bold text-cyan-400 mb-1">WAVES BAR</h4>
              <p className="text-xs md:text-sm text-white/50">Атмосфера океанского бриза</p>
            </div>
            
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-cyan-500/20 flex items-center justify-center transition-colors">
                <Icon name="Instagram" size={18} className="text-cyan-400" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-cyan-500/20 flex items-center justify-center transition-colors">
                <Icon name="Facebook" size={18} className="text-cyan-400" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-cyan-500/20 flex items-center justify-center transition-colors">
                <Icon name="Youtube" size={18} className="text-cyan-400" />
              </a>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-zinc-800 text-center text-xs md:text-sm text-white/40">
            © 2024 Waves Bar. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;