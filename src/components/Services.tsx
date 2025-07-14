import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Services() {
  const services = [
    {
      icon: 'Wrench',
      title: 'Строительство фундамента',
      description: 'Монолитные, ленточные и свайные фундаменты с гарантией прочности',
      price: 'от 12 000 ₸/м²',
      features: ['Геологические изыскания', 'Гидроизоляция', 'Утепление'],
    },
    {
      icon: 'Hammer',
      title: 'Возведение стен',
      description: 'Кирпич, блоки, каркасные технологии - любые материалы',
      price: 'от 25 000 ₸/м²',
      features: ['Утепление стен', 'Армирование', 'Контроль качества'],
    },
    {
      icon: 'Zap',
      title: 'Кровельные работы',
      description: 'Металлочерепица, мягкая кровля, профнастил',
      price: 'от 8 000 ₸/м²',
      features: ['Стропильная система', 'Гидроизоляция', 'Водостоки'],
    },
    {
      icon: 'Lightbulb',
      title: 'Инженерные системы',
      description: 'Электричество, водопровод, отопление, канализация',
      price: 'от 15 000 ₸/м²',
      features: ['Проектирование', 'Монтаж', 'Пусконаладка'],
    },
    {
      icon: 'Paintbrush',
      title: 'Отделочные работы',
      description: 'Внутренняя и внешняя отделка любой сложности',
      price: 'от 18 000 ₸/м²',
      features: ['Штукатурка', 'Покраска', 'Декоративная отделка'],
    },
    {
      icon: 'Trees',
      title: 'Благоустройство',
      description: 'Ландшафтный дизайн, дорожки, ограждения',
      price: 'от 5 000 ₸/м²',
      features: ['Планировка участка', 'Озеленение', 'Малые формы'],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-primary/10 text-primary mb-4">
            <Icon name="Settings" className="w-4 h-4 mr-2" />
            Наши услуги
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Полный цикл строительства
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            От проектирования до сдачи объекта под ключ. Работаем с любыми материалами и технологиями.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon name={service.icon as any} className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="outline" className="text-primary border-primary">
                    {service.price}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">{service.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-gray-900">Включает:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <Icon name="Check" className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full" variant="outline">
                  <Icon name="Info" className="w-4 h-4 mr-2" />
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="text-lg px-8">
            <Icon name="MessageCircle" className="w-5 h-5 mr-2" />
            Получить консультацию
          </Button>
        </div>
      </div>
    </section>
  );
}