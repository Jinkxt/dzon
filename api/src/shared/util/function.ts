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

// async function  delay(delay:number,value:any){
//     const delayPromise = (delay:any) => new Promise(res => setTimeout(res, delay))
//     await delayPromise(delay)
//   return value
//   }

const delay = async (delay = 1000, callback: any) => {
  const delayPromise = (ms: any) => new Promise((res) => setTimeout(res, ms));
  await delayPromise(delay);

  return callback;
};

export { getDateAndTime, delay };
