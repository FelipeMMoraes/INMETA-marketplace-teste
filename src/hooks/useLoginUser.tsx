import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../services/auth/login";

export const useLoginUser = () => {
  const mutation = useMutation({
    mutationFn: loginUser,
  });

  return mutation;
};
