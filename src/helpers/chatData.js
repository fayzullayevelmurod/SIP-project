import assets from "../assets";

export const data = [
  {
    date: "Сегодня",
    items: [
      {
        id: 1,
        type: "personal",
        avatarImg: `${assets.avatar2}`,
        name: "Игорь Петрович",
        message: "Привет! Завтра планируется конференция",
        msgTime: "Июнь 28 2024 в 12:30",
        seen: true,
      },
      {
        id: 2,
        type: "corporate",
        name: "Корпоративный клуб",
        message: "Технологический лидер нефтегазового рынка России",
        msgTime: "Июнь 28 2024 в 12:30",
        seen: true,
      },
      {
        id: 3,
        type: "personal",
        avatarImg: `${assets.avatar}`,
        name: "Андрей Фирт",
        message: "Привет! Завтра планируется конференция",
        msgTime: "Июнь 28 2024 в 12:30",
        seen: true,
      },
      {
        id: 4,
        type: "personal",
        avatarImg: `${assets.avatar2}`,
        name: "Михаил Давыдов",
        message: "Привет! Завтра планируется конференция",
        msgTime: "Июнь 28 2024 в 12:30",
        seen: true,
      },
    ],
  },
  {
    date: "Вчера",
    items: [
      {
        id: 5,
        type: "personal",
        avatarImg: `${assets.avatar}`,
        name: "Геологи ГПН",
        message: "Исследования на новом участке земли",
        msgTime: "Июнь 28 2024 в 12:30",
        seen: true,
      },
      {
        id: 6,
        type: "personal",
        avatarImg: `${assets.avatar2}`,
        name: "Михаил Давыдов",
        message: "Исследования на новом участке земли",
        msgTime: "Июнь 28 2024 в 12:30",
        seen: true,
      },
    ],
  },
];

export const extractDate = (msgTime) => {
  const pasts = msgTime.split(" ");
  return `${pasts[0]} ${pasts[1]}`;
};

export const fetchById = (id) => {
  return data.find((item) => item.id === parseInt(id));
};
