export interface User {
  user: number;
  password: string;
  token?: string;
  status?: number;
}

export interface AllData {
  title: string;
  cover: string;
  content: string;
  description: string;
  whoSend?: number;
  watch?: number;
  comments?: number;
}
