export interface User {
  user: number;
  password: string;
  token?: string;
  status?: number;
}

export interface AllData {
  cover: string;
  content: string;
}
