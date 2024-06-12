import api from "../../config/api";
import { IRegisterUser, IRegisterUserPayload } from "./interfaces";

export const registerUser = async ({
  name,
  email,
  password,
}: IRegisterUser): Promise<IRegisterUserPayload> => {
  try {
    const response = await api.post("/register", {
      name,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error("Erro ao registrar usuário");
  }
};
