import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const cities = [
    "Астана", "Алматы", "Шымкент", "Актобе", "Тараз", "Павлодар", "Усть-Каменогорск", "Семей",
    "Атырау", "Костанай", "Кызылорда", "Уральск", "Петропавловск", "Актау", "Темиртау", "Туркестан"
  ];

  const services = [
    {
      icon: "Home",
      title: "Строительство домов",
      description: "Полный цикл строительства частных домов под ключ"
    },
    {
      icon: "Building",
      title: "Коммерческое строительство",
      description: "Офисные здания, торговые центры, складские помещения"
    },
    {
      icon: "Wrench",
      title: "Ремонт и отделка",
      description: "Капитальный и косметический ремонт любой сложности"
    },
    {
      icon: "Hammer",
      title: "Проектирование",
      description: "Архитектурные проекты и дизайн интерьеров"
    },
    {
      icon: "Truck",
      title: "Поставка материалов",
      description: "Качественные строительные материалы напрямую от производителей"
    },
    {
      icon: "Shield",
      title: "Гарантийное обслуживание",
      description: "Полная гарантия на все выполненные работы"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Building2" className="text-orange-500" size={32} />
              <h1 className="text-2xl font-bold text-slate-800">СтройДом</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#home" className="text-slate-700 hover:text-orange-500 transition-colors">Главная</a>
              <a href="#about" className="text-slate-700 hover:text-orange-500 transition-colors">О нас</a>
              <a href="#services" className="text-slate-700 hover:text-orange-500 transition-colors">Услуги</a>
              <a href="#contact" className="text-slate-700 hover:text-orange-500 transition-colors">Контакты</a>
            </nav>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-blue-500/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl font-bold text-slate-800 mb-6 leading-tight">
                Строим будущее <span className="text-orange-500">вместе</span>
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Профессиональное строительство и ремонт в 16 городах Казахстана. 
                Качество, надежность и современные технологии для вашего комфорта.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
                <Button size="lg" variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть портфолио
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {cities.slice(0, 8).map((city, index) => (
                  <Badge key={index} variant="secondary" className="bg-slate-100 text-slate-700">
                    {city}
                  </Badge>
                ))}
                <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                  +{cities.length - 8} еще
                </Badge>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 animate-scale-in">
                <img 
                  src="/img/1d0fea22-3215-4a51-bb7a-2fafa96eb88f.jpg"
                  alt="Современное строительство"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-orange-500 to-blue-500 rounded-2xl opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">О нашей компании</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Более 15 лет опыта в строительной индустрии Казахстана. Мы создаем 
              качественные объекты, которые служат десятилетиями.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img 
                src="/img/5a0d70c7-5036-4dad-b578-a99d67c4a954.jpg"
                alt="Команда строителей"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Icon name="Award" className="text-orange-500" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Качество гарантировано</h3>
                  <p className="text-slate-600">Используем только проверенные материалы и современные технологии строительства.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Icon name="Users" className="text-blue-500" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Опытная команда</h3>
                  <p className="text-slate-600">Сертифицированные специалисты с многолетним опытом работы.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Icon name="Clock" className="text-green-500" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Соблюдение сроков</h3>
                  <p className="text-slate-600">Выполняем все работы точно в установленные сроки.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Наши услуги</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Полный спектр строительных услуг для частных клиентов и коммерческих проектов
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 hover-scale">
                <CardHeader>
                  <div className="bg-orange-100 p-3 rounded-lg w-fit mb-4">
                    <Icon name={service.icon} className="text-orange-500" size={24} />
                  </div>
                  <CardTitle className="text-slate-800">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 mb-4">
                    {service.description}
                  </CardDescription>
                  <Button variant="ghost" className="text-orange-500 hover:bg-orange-50 p-0">
                    Подробнее <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Готовы обсудить ваш проект? Оставьте заявку и мы свяжемся с вами в течение часа
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <img 
                src="/img/7fbea505-285f-4c97-947a-2442ff07ecbb.jpg"
                alt="Готовый дом"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <div className="grid gap-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Icon name="Phone" className="text-orange-500" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Телефон</h3>
                    <p className="text-slate-600">+7 (777) 123-45-67</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Icon name="Mail" className="text-blue-500" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Email</h3>
                    <p className="text-slate-600">info@stroimdom.kz</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Icon name="MapPin" className="text-green-500" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Адрес</h3>
                    <p className="text-slate-600">г. Астана, ул. Строительная, 123</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-orange-500 to-blue-500 p-6 rounded-xl text-white">
                <h3 className="text-xl font-semibold mb-4">Работаем в городах:</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {cities.map((city, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon name="MapPin" size={12} />
                      <span>{city}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Button size="lg" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Получить консультацию
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Building2" className="text-orange-500" size={24} />
                <h3 className="text-xl font-bold">СтройДом</h3>
              </div>
              <p className="text-slate-300">
                Профессиональное строительство и ремонт в Казахстане
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <div className="space-y-2 text-slate-300">
                <p>Строительство домов</p>
                <p>Коммерческое строительство</p>
                <p>Ремонт и отделка</p>
                <p>Проектирование</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-slate-300">
                <p>+7 (777) 123-45-67</p>
                <p>info@stroimdom.kz</p>
                <p>г. Астана, ул. Строительная, 123</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Режим работы</h4>
              <div className="space-y-2 text-slate-300">
                <p>Пн-Пт: 8:00 - 18:00</p>
                <p>Сб: 9:00 - 16:00</p>
                <p>Вс: выходной</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 СтройДом. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;