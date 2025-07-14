import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Icon from '@/components/ui/icon';
import { cities, getCityName } from '@/data/cities';

export default function Header() {
  const { city = 'almaty' } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const currentCity = getCityName(city);

  const navigation = [
    { name: 'Главная', href: `/${city}` },
    { name: 'Проекты', href: `/${city}/projects` },
    { name: 'Услуги', href: `/${city}/services` },
    { name: 'О нас', href: `/${city}/about` },
    { name: 'Контакты', href: `/${city}/contacts` },
  ];

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to={`/${city}`} className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Home" className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">СтройДом</span>
            </Link>

            <nav className="hidden md:flex items-center space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="hidden sm:flex">
                  <Icon name="MapPin" className="w-4 h-4 mr-2" />
                  {currentCity}
                  <Icon name="ChevronDown" className="w-4 h-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {cities.map((cityItem) => (
                  <DropdownMenuItem key={cityItem.id} asChild>
                    <Link to={`/${cityItem.id}`} className="flex items-center justify-between">
                      <span>{cityItem.name}</span>
                      <Badge variant="secondary" className="text-xs">
                        {cityItem.projects}
                      </Badge>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button size="sm" className="hidden sm:flex">
              <Icon name="Phone" className="w-4 h-4 mr-2" />
              Звонок
            </Button>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Icon name="Menu" className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-6 mt-8">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                      <Icon name="Home" className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-bold text-gray-900">СтройДом</span>
                  </div>

                  <nav className="flex flex-col space-y-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="text-gray-700 hover:text-primary transition-colors py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>

                  <div className="border-t pt-4">
                    <h3 className="font-semibold mb-3">Выберите город:</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {cities.slice(0, 8).map((cityItem) => (
                        <Link
                          key={cityItem.id}
                          to={`/${cityItem.id}`}
                          className="flex items-center justify-between p-2 hover:bg-gray-50 rounded"
                          onClick={() => setIsOpen(false)}
                        >
                          <span className="text-sm">{cityItem.name}</span>
                          <Badge variant="secondary" className="text-xs">
                            {cityItem.projects}
                          </Badge>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full">
                    <Icon name="Phone" className="w-4 h-4 mr-2" />
                    Заказать звонок
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}