export type Weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type WeatherMainInfo = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
};

export type Wind = {
  speed: number;
  deg: number;
  gust: number;
};

export type WeatherSysInfo = {
  country: string;
  sunrise: number;
  sunset: number;
};
