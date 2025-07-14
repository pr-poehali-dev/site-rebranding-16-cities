import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { getCity } from '@/data/cities';

export default function Hero() {
  const { city = 'almaty' } = useParams();
  const cityData = getCity(city);

  if (!cityData) return null;

  const benefits = [
    { icon: 'Shield', text: 'Гарантия 5 лет' },
    { icon: 'Clock', text: 'Смета за 15 минут' },
    { icon: 'Star', text: `${cityData.projects}+ проектов` },
    { icon: 'Users', text: `${cityData.experience} лет опыта` },
  ];

  return (
    <section className="relative bg-gradient-to-br from-orange-50 to-yellow-50 overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                <Icon name="MapPin" className="w-4 h-4 mr-2" />
                Работаем в {cityData.name}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Строительство домов
                <span className="text-primary"> под ключ</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {cityData.description}. Профессиональное строительство с полным циклом работ от фундамента до отделки.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4 flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name={benefit.icon as any} className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium">{benefit.text}</span>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8">
                <Icon name="Calculator" className="w-5 h-5 mr-2" />
                Рассчитать стоимость
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Icon name="Phone" className="w-5 h-5 mr-2" />
                {cityData.phone}
              </Button>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Icon name="CheckCircle" className="w-4 h-4 text-green-500" />
                <span>Бесплатная консультация</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="CheckCircle" className="w-4 h-4 text-green-500" />
                <span>Выезд на участок</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="/img/7a25ede0-a77f-46e5-957d-111109636c59.jpg"
                alt="Строительство домов"
                className="rounded-2xl shadow-2xl w-full aspect-[4/3] object-cover"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-72 h-72 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}