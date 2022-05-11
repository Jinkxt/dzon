import { IDateEndTime } from './types';

function getDateAndTime(): IDateEndTime {
  let date = new Date();
  date.setHours(date.getHours() + 1);
  let isoDate = date.toISOString();

  const time: IDateEndTime = {
    UpdateDate: isoDate.slice(0, 10),
    UpdateTime: isoDate.slice(11, 19),
  };
  return time;
}

export { getDateAndTime };
