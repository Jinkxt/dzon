
export interface IHttpResponse {
  headers: {
    'Content-Type': string;
  };
  statusCode: number;
  body: any;
}
export interface IHttpRequest {
  body: any;
  query: any;
  params: any;
  ip: any;
  method: any;
  path: any;
  headers: {
    'Content-Type': any;
    Referer: any;
    'User-Agent': any;
  };
}

export interface IDateEndTime {
  UpdateDate: string;
  UpdateTime: string;
}
