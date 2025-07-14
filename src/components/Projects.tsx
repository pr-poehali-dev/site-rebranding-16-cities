import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useParams } from 'react-router-dom';
import { getCity } from '@/data/cities';

export default function Projects() {
  const { city = 'almaty' } = useParams();
  const cityData = getCity(city);

  const projects = [
    {
      id: 1,
      title: 'Загородный дом для семьи',
      area: '180 м²',
      type: 'Коттедж',
      price: '27 000 000 ₸',
      duration: '4 месяца',
      image: '/img/48e5c971-845b-43c0-bfb9-b8d38ec3fae7.jpg',
      features: ['3 спальни', 'Гараж', 'Терраса', 'Камин'],
    },
    {
      id: 2,
      title: 'Современный дом с панорамными окнами',
      area: '250 м²',
      type: 'Дом премиум',
      price: '45 000 000 ₸',
      duration: '6 месяцев',
      image: '/img/7a25ede0-a77f-46e5-957d-111109636c59.jpg',
      features: ['4 спальни', 'Сауна', 'Бассейн', 'Умный дом'],
    },
    {
      id: 3,
      title: 'Уютный дом эконом-класса',
      area: '120 м²',
      type: 'Дом эконом',
      price: '18 000 000 ₸',
      duration: '3 месяца',
      image: '/img/f47363d5-154d-4bb0-9c7e-f0a87718f0db.jpg',
      features: ['2 спальни', 'Кухня-гостиная', 'Веранда', 'Котельная'],
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-primary/10 text-primary mb-4">
            <Icon name="Building" className="w-4 h-4 mr-2" />
            Наши проекты
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Реализованные проекты в {cityData?.name}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Более {cityData?.projects} успешно завершенных проектов за {cityData?.experience} лет работы.
            Каждый дом построен с любовью и вниманием к деталям.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-gray-900">
                    {project.type}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span className="flex items-center">
                      <Icon name="Home" className="w-4 h-4 mr-1" />
                      {project.area}
                    </span>
                    <span className="flex items-center">
                      <Icon name="Clock" className="w-4 h-4 mr-1" />
                      {project.duration}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-gray-900">Особенности:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <p className="text-sm text-gray-600">Стоимость</p>
                    <p className="text-lg font-bold text-primary">{project.price}</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <Icon name="Eye" className="w-4 h-4 mr-2" />
                    Детали
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="text-lg px-8">
            <Icon name="Grid" className="w-5 h-5 mr-2" />
            Все проекты
          </Button>
        </div>
      </div>
    </section>
  );
}