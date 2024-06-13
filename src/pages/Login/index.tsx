import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginUser } from "../../hooks/useLoginUser";
import { ILoginUser } from "../../services/auth/login/interface";

export const Login = () => {
  const [email, setEmail] = useState<ILoginUser["email"]>("");
  const [password, setPassword] = useState<ILoginUser["password"]>("");
  const [error, setError] = useState("");

  const { mutate } = useLoginUser();
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    mutate(
      {
        email,
        password,
      },
      {
        onError: () => {
          setError("Email ou senha errada, tente novamente.");
        },
        onSuccess: (data) => {
          localStorage.setItem("authToken", data.token);
          navigate("/");
        },
      }
    );
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Senha</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};
