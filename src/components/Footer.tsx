import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { getCity } from '@/data/cities';

export default function Footer() {
  const { city = 'almaty' } = useParams();
  const cityData = getCity(city);

  const services = [
    'Строительство фундамента',
    'Возведение стен',
    'Кровельные работы',
    'Инженерные системы',
    'Отделочные работы',
    'Благоустройство',
  ];

  const projects = [
    'Загородные дома',
    'Коттеджи',
    'Дома эконом-класса',
    'Дома премиум',
    'Реконструкция',
    'Пристройки',
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Home" className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">СтройДом</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Строительная компания с {cityData?.experience} летним опытом работы в {cityData?.name}.
              Строим качественные дома под ключ с гарантией 5 лет.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Icon name="MessageCircle" className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Icon name="Phone" className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Icon name="Mail" className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Услуги</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={`/${city}/services`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Проекты</h3>
            <ul className="space-y-3">
              {projects.map((project, index) => (
                <li key={index}>
                  <Link
                    to={`/${city}/projects`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {project}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Контакты</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Icon name="MapPin" className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">{cityData?.name}</p>
                  <p className="text-sm text-gray-400">{cityData?.region}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Phone" className="w-5 h-5 text-primary" />
                <a href={`tel:${cityData?.phone}`} className="hover:text-white transition-colors">
                  {cityData?.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Clock" className="w-5 h-5 text-primary" />
                <span className="text-sm text-gray-400">Пн-Пт: 9:00-18:00</span>
              </div>
            </div>
            <Button className="w-full">
              <Icon name="MessageCircle" className="w-4 h-4 mr-2" />
              Написать в WhatsApp
            </Button>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © 2024 СтройДом. Все права защищены.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to={`/${city}/privacy`} className="text-gray-400 hover:text-white transition-colors">
              Политика конфиденциальности
            </Link>
            <Link to={`/${city}/terms`} className="text-gray-400 hover:text-white transition-colors">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}