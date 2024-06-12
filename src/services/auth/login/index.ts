import api from "../../config/api";
import { ILoginUser, ILoginUserPayload } from "./interface";

export const loginUser = async ({
  email,
  password,
}: ILoginUser): Promise<ILoginUserPayload> => {
  return await api
    .post("/login", {
      email,
      password,
    })
    .then((res) => res.data);
};
