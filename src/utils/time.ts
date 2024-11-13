const DAY_NAMES = [
  "Sun.",
  "Mon.",
  "Tue.",
  "Wed.",
  "Thu.",
  "Fri.",
  "Sat.",
] as const;
type WeekDay = (typeof DAY_NAMES)[number];

export const MIL_SECONDS_OF_DAY = 24 * 60 * 60 * 1000;

type TimeInfo = {
  year: number;
  monthIndex: number;
  month: number;
  date: number;
  hour: number;
  minute: number;
  second: number;
  day: WeekDay;
  dayIndex: number;
};
export const getTimeInfo = (): TimeInfo => {
  const today = new Date();
  const monthIndex = today.getMonth();
  const dayIndex = today.getDay();

  return {
    year: today.getFullYear(),
    monthIndex,
    month: monthIndex + 1,
    date: today.getDate(),
    hour: today.getHours(),
    minute: today.getMinutes(),
    second: today.getSeconds(),
    dayIndex,
    day: DAY_NAMES[dayIndex],
  };
};

// TODO: rename function to formatTimeUnit
export const normalizeNum = (num: number): string => {
  return num < 10 ? `0${num}` : `${num}`;
};

export const getMilSecondsBetweenDates = (laterDate: Date, earlierDate: Date) => {
  return laterDate.getTime() - earlierDate.getTime();
}

export const getDaysBetweenDates = (laterDate: Date, earlierDate: Date) => {
  return Math.floor(
    getMilSecondsBetweenDates(laterDate, earlierDate) / MIL_SECONDS_OF_DAY
  );
};
