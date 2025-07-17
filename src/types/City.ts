import type { Weather, WeatherMainInfo, WeatherSysInfo, Wind } from "./Weather";

export type CityInfo = {
  id: number;
  name: string;
  url: string;
};

export type City = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: Weather[];
  base: string;
  main: WeatherMainInfo;
  visibility: number;
  wind: Wind;
  clouds: {
    all: number;
  };
  dt: number;
  sys: WeatherSysInfo;
  timezone: number;
  id: number;
  name: string;
  cod: number;
};
