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
      <button onClick={() => scrollToSection('about')} className="text-white/90 hover:text-cyan-400 transition-colors text-sm md:text-base">О нас</button>
      <button onClick={() => scrollToSection('advantages')} className="text-white/90 hover:text-cyan-400 transition-colors text-sm md:text-base">Преимущества</button>
      <button onClick={() => scrollToSection('reviews')} className="text-white/90 hover:text-cyan-400 transition-colors text-sm md:text-base">Отзывы</button>
      <button onClick={() => scrollToSection('booking')} className="text-white/90 hover:text-cyan-400 transition-colors text-sm md:text-base">Бронирование</button>
    </>
  );

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <header className="fixed top-0 w-full bg-zinc-950/90 backdrop-blur-md z-50 border-b border-zinc-800">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold text-cyan-400">Waves Bar</h1>
          
          <div className="hidden md:flex gap-6 items-center">
            <NavLinks />
          </div>

          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <Icon name="Menu" size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-zinc-900 border-zinc-800">
              <div className="flex flex-col gap-6 mt-8">
                <NavLinks />
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </header>

      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 md:pt-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: 'url(https://cdn.poehali.dev/files/e00dff25-d82c-4586-a14a-f301e2adca2e.png)' }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6">Waves Bar</h2>
          <p className="text-lg md:text-xl lg:text-2xl text-white/80 mb-6 md:mb-8 px-4">Ощутите атмосферу океанского бриза с эксклюзивными коктейлями</p>
          <Button 
            onClick={() => scrollToSection('booking')}
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg rounded-lg"
          >
            Забронировать столик
          </Button>
        </div>
      </section>

      <section id="about" className="py-12 md:py-20 px-4 bg-zinc-900">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Waves Bar</h3>
              <p className="text-base md:text-lg text-white/70 leading-relaxed">
                Каждодневно покоряем океаном и пляжными коктейлями. Мы предлагаем не просто напитки, а полноценные истории тропических вечеров и ремаркейских вечеров с живой музыкой. Наша цель — создать атмосферу, где каждый коктейль получает овации от моря.
              </p>
            </div>
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/files/e00dff25-d82c-4586-a14a-f301e2adca2e.png" 
                alt="Waves Bar Interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-center">Преимущества</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
            <Card className="bg-zinc-900 border-cyan-500/20 p-6 md:p-8 hover:border-cyan-500/50 transition-all">
              <div className="mb-4 text-cyan-400">
                <Icon name="Waves" size={32} className="md:w-12 md:h-12" />
              </div>
              <h4 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Эксклюзивная рецептура коктейлей</h4>
              <p className="text-sm md:text-base text-white/70">с местными ингредиентами</p>
            </Card>

            <Card className="bg-zinc-900 border-cyan-500/20 p-6 md:p-8 hover:border-cyan-500/50 transition-all">
              <div className="mb-4 text-cyan-400">
                <Icon name="Music" size={32} className="md:w-12 md:h-12" />
              </div>
              <h4 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Живые DJ-сеты</h4>
              <p className="text-sm md:text-base text-white/70">с тропической музыкой, погружающей в атмосферу океанского бриза</p>
            </Card>

            <Card className="bg-zinc-900 border-cyan-500/20 p-6 md:p-8 hover:border-cyan-500/50 transition-all">
              <div className="mb-4 text-cyan-400">
                <Icon name="Wind" size={32} className="md:w-12 md:h-12" />
              </div>
              <h4 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Команда опытных барменов</h4>
              <p className="text-sm md:text-base text-white/70">прошедших в лучших барах мира</p>
            </Card>

            <Card className="bg-zinc-900 border-cyan-500/20 p-6 md:p-8 hover:border-cyan-500/50 transition-all">
              <div className="mb-4 text-cyan-400">
                <Icon name="Users" size={32} className="md:w-12 md:h-12" />
              </div>
              <h4 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Атмосфера океанского бриза</h4>
              <p className="text-sm md:text-base text-white/70">уникальная в лучших барах города</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-12 md:py-20 px-4 bg-zinc-900">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-center">Что говорят о нас</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <Card className="bg-cyan-500/10 border-cyan-500/30 p-6 md:p-8">
              <div className="flex items-center gap-3 md:gap-4 mb-4">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-cyan-500/20 flex items-center justify-center text-xl md:text-2xl">
                  🌊
                </div>
                <div>
                  <h5 className="font-bold text-base md:text-lg">Алексей</h5>
                  <div className="flex text-cyan-400 text-sm md:text-base">★★★★★</div>
                </div>
              </div>
              <p className="text-sm md:text-base text-white/80">
                "Потрясающая атмосфера и невероятные коктейли! DJ-сеты создают идеальное настроение. Обязательно вернусь снова!"
              </p>
            </Card>

            <Card className="bg-cyan-500/10 border-cyan-500/30 p-6 md:p-8">
              <div className="flex items-center gap-3 md:gap-4 mb-4">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-cyan-500/20 flex items-center justify-center text-xl md:text-2xl">
                  🎵
                </div>
                <div>
                  <h5 className="font-bold text-base md:text-lg">Мария</h5>
                  <div className="flex text-cyan-400 text-sm md:text-base">★★★★★</div>
                </div>
              </div>
              <p className="text-sm md:text-base text-white/80">
                "Лучший бар в городе! Коктейли с местными ингредиентами - это что-то особенное. Команда барменов - настоящие профессионалы."
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="booking" className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Бронирование</h3>
            <p className="text-base md:text-lg text-white/70">В Waves Bar мы создали не просто бар — это место, где вы можете испытать что-то новое</p>
          </div>

          <Card className="bg-zinc-900 border-cyan-500/20 p-6 md:p-8">
            <form className="space-y-4 md:space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Имя</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 md:py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-cyan-500 focus:outline-none text-sm md:text-base"
                  placeholder="Ваше имя"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Телефон</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-2 md:py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-cyan-500 focus:outline-none text-sm md:text-base"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Дата</label>
                  <input 
                    type="date" 
                    className="w-full px-4 py-2 md:py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-cyan-500 focus:outline-none text-sm md:text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Время</label>
                  <input 
                    type="time" 
                    className="w-full px-4 py-2 md:py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-cyan-500 focus:outline-none text-sm md:text-base"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Количество гостей</label>
                <select className="w-full px-4 py-2 md:py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-cyan-500 focus:outline-none text-sm md:text-base">
                  <option>1-2 человека</option>
                  <option>3-4 человека</option>
                  <option>5-6 человек</option>
                  <option>7+ человек</option>
                </select>
              </div>

              <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 md:py-4 text-base md:text-lg rounded-lg">
                Забронировать
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="bg-zinc-950 border-t border-zinc-800 py-8 md:py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl md:text-2xl font-bold text-cyan-400 mb-4">Waves Bar</h4>
              <p className="text-sm md:text-base text-white/60">Атмосфера океанского бриза с эксклюзивными коктейлями</p>
            </div>
            
            <div>
              <h5 className="font-bold mb-3 md:mb-4 text-base md:text-lg">Контакты</h5>
              <div className="space-y-2 text-sm md:text-base text-white/60">
                <p>📍 ул. Морская, 123</p>
                <p>📞 +7 (999) 123-45-67</p>
                <p>✉️ info@wavesbar.ru</p>
              </div>
            </div>
            
            <div>
              <h5 className="font-bold mb-3 md:mb-4 text-base md:text-lg">Часы работы</h5>
              <div className="space-y-2 text-sm md:text-base text-white/60">
                <p>Пн-Чт: 18:00 - 02:00</p>
                <p>Пт-Сб: 18:00 - 04:00</p>
                <p>Вс: 18:00 - 00:00</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-zinc-800 text-center text-xs md:text-sm text-white/40">
            © 2024 Waves Bar. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
