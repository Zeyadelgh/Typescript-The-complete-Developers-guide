interface Add {
  a: number;
  b: number;
}
const add = (a: number, b: number): number => {
  return a | b;
  // 00000001
  // 00000101
  //=00000101
};

const logger = (message: string): never => {
  throw new Error(message);
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
