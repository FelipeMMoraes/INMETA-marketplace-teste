export interface ILoginUser {
  email: string;
  password: string;
}

export interface ILoginUserPayload {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}
