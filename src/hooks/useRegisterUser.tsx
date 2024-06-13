import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../services/auth/register";

export const useRegisterUser = () => {
  const mutation = useMutation({
    mutationFn: registerUser,
  });

  return mutation;
};
