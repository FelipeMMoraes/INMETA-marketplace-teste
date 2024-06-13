import api from "../../config/api";
import { IRegisterUser, IRegisterUserPayload } from "./interfaces";

export const registerUser = async (
  userData: IRegisterUser
): Promise<IRegisterUserPayload> => {
  try {
    const { name, email, password } = userData;
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
