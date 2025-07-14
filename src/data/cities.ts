export const cities = [
  {
    id: 'almaty',
    name: 'Алматы',
    phone: '+7 (727) 123-45-67',
    region: 'Алматинская область',
    description: 'Крупнейший город Казахстана с богатой историей строительства',
    projects: 320,
    experience: 15
  },
  {
    id: 'astana',
    name: 'Нур-Султан',
    phone: '+7 (717) 234-56-78',
    region: 'Акмолинская область',
    description: 'Столица Казахстана с современной архитектурой',
    projects: 180,
    experience: 12
  },
  {
    id: 'shymkent',
    name: 'Шымкент',
    phone: '+7 (725) 345-67-89',
    region: 'Туркестанская область',
    description: 'Динамично развивающийся южный город',
    projects: 145,
    experience: 10
  },
  {
    id: 'aktobe',
    name: 'Актобе',
    phone: '+7 (713) 456-78-90',
    region: 'Актюбинская область',
    description: 'Промышленный центр западного Казахстана',
    projects: 98,
    experience: 8
  },
  {
    id: 'taraz',
    name: 'Тараз',
    phone: '+7 (726) 567-89-01',
    region: 'Жамбылская область',
    description: 'Древний город с современными решениями',
    projects: 87,
    experience: 7
  },
  {
    id: 'pavlodar',
    name: 'Павлодар',
    phone: '+7 (718) 678-90-12',
    region: 'Павлодарская область',
    description: 'Индустриальный центр северного Казахстана',
    projects: 76,
    experience: 6
  },
  {
    id: 'ust-kamenogorsk',
    name: 'Усть-Каменогорск',
    phone: '+7 (723) 789-01-23',
    region: 'Восточно-Казахстанская область',
    description: 'Горный город с уникальными проектами',
    projects: 65,
    experience: 5
  },
  {
    id: 'karaganda',
    name: 'Караганда',
    phone: '+7 (721) 890-12-34',
    region: 'Карагандинская область',
    description: 'Центр угольной промышленности',
    projects: 92,
    experience: 9
  },
  {
    id: 'semey',
    name: 'Семей',
    phone: '+7 (722) 901-23-45',
    region: 'Восточно-Казахстанская область',
    description: 'Культурный центр востока Казахстана',
    projects: 54,
    experience: 4
  },
  {
    id: 'atyrau',
    name: 'Атырау',
    phone: '+7 (712) 012-34-56',
    region: 'Атырауская область',
    description: 'Нефтяная столица Казахстана',
    projects: 43,
    experience: 3
  },
  {
    id: 'kostanay',
    name: 'Костанай',
    phone: '+7 (714) 123-45-67',
    region: 'Костанайская область',
    description: 'Сельскохозяйственный центр',
    projects: 38,
    experience: 4
  },
  {
    id: 'kyzylorda',
    name: 'Кызылорда',
    phone: '+7 (724) 234-56-78',
    region: 'Кызылординская область',
    description: 'Город в дельте реки Сырдарья',
    projects: 32,
    experience: 3
  },
  {
    id: 'petropavlovsk',
    name: 'Петропавловск',
    phone: '+7 (715) 345-67-89',
    region: 'Северо-Казахстанская область',
    description: 'Северные ворота Казахстана',
    projects: 29,
    experience: 2
  },
  {
    id: 'aktau',
    name: 'Актау',
    phone: '+7 (729) 456-78-90',
    region: 'Мангистауская область',
    description: 'Город на берегу Каспийского моря',
    projects: 25,
    experience: 2
  },
  {
    id: 'oral',
    name: 'Уральск',
    phone: '+7 (711) 567-89-01',
    region: 'Западно-Казахстанская область',
    description: 'Исторический центр запада страны',
    projects: 21,
    experience: 2
  },
  {
    id: 'kokshetau',
    name: 'Кокшетау',
    phone: '+7 (716) 678-90-12',
    region: 'Акмолинская область',
    description: 'Жемчужина Казахстана',
    projects: 18,
    experience: 1
  }
];

export const getCity = (id: string) => {
  return cities.find(city => city.id === id);
};

export const getCityName = (id: string) => {
  const city = getCity(id);
  return city ? city.name : 'Алматы';
};