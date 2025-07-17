import type { CityInfo } from "../types/City";

export const CITIES: CityInfo[] = [
  {
    name: "Москва",
    id: 213,
    url: "moscow",
  },
  {
    name: "Санкт-Петербург",
    id: 2,
    url: "spb",
  },
  {
    name: "Новосибирск",
    id: 65,
    url: "novosibirsk",
  },
  {
    name: "Екатеринбург",
    id: 54,
    url: "ekb",
  },
  {
    name: "Казань",
    id: 43,
    url: "kazan",
  },
  {
    name: "Нижний Новгород",
    id: 47,
    url: "nizhniy-novgorod",
  },
  {
    name: "Челябинск",
    id: 56,
    url: "chelyabinsk",
  },
  {
    name: "Самара",
    id: 51,
    url: "samara",
  },
  {
    name: "Омск",
    id: 66,
    url: "omsk",
  },
  {
    name: "Ростов-на-Дону",
    id: 39,
    url: "rostov-na-donu",
  },
];

export const API_KEY = "cfad0b326eedcbfa79a54662567d6e94";

export const AppRoutes = {
  main: "/",
  login: "/login",
  city: "/city",
  cityId: "/city/:id",
};
