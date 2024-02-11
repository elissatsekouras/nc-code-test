import { TimeToDDay } from '../types/time-to-d-day.type';

export default function timeToDDay(date: Date): TimeToDDay {
  const dDay = date.valueOf();

  const milliSecondsInASecond = 1000;
  const hoursInADay = 24;
  const minutesInAnHour = 60;
  const secondsInAMinute = 60;
  const timezoneOffsetInMilliSeconds =
    new Date().getTimezoneOffset() * (secondsInAMinute * milliSecondsInASecond);

  const timeDifference = dDay - Date.now() + timezoneOffsetInMilliSeconds;

  const daysToDday = Math.floor(
    timeDifference /
      (milliSecondsInASecond *
        minutesInAnHour *
        secondsInAMinute *
        hoursInADay),
  );
  const hoursToDday = Math.floor(
    (timeDifference /
      (milliSecondsInASecond * minutesInAnHour * secondsInAMinute)) %
      hoursInADay,
  );
  const minutesToDday = Math.floor(
    (timeDifference / (milliSecondsInASecond * minutesInAnHour)) %
      secondsInAMinute,
  );
  const secondsToDday =
    Math.floor(timeDifference / milliSecondsInASecond) % secondsInAMinute;

  return {
    secondsToDday: Math.max(secondsToDday, 0),
    minutesToDday: Math.max(minutesToDday, 0),
    hoursToDday: Math.max(hoursToDday, 0),
    daysToDday: Math.max(daysToDday, 0),
  };
}
