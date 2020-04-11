export type LinkData = {
  id: string;
  long: string;
  short: string;
  createdAt: Date;
  clicks: number;
};

export type UserInfo = {
  userName: string;
  email: string;
  dateCreated: Date;
  links: number;
  clicks: number;
} | null;

export type Action = {
  type: string;
  payload?: any;
};

export interface IError {
  code?: number;
  message: string;
}
