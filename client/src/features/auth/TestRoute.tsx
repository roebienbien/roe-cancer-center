import { useLogin } from "./useLogin";
import { useForm } from "react-hook-form";
import { LoginFormData, loginSchema } from "./login-schema";
import { zodResolver } from '@hookform/resolvers/zod'

export default function TestRoute() {
  const { mutate, isPending, error } = useLogin();


  const { register, handleSubmit, formState: { errors, isValid } } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "margaret.beatty@example.com",
      password: "Password123!"
    }
  })

  const onSubmit = (data: LoginFormData) => {
    console.log("submitting login")
    mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="email"
        {...register("email")}
      />
      {errors.email && <p>{errors.email.message}</p>}

      <input
        type="password"
        {...register("password")}
      />
      {errors.password && <p>{errors.password.message}</p>}

      <button type="submit" disabled={isPending}>
        {isPending ? "Logging in..." : "Login"}
      </button>

      {error && <p>Login failed</p>}
    </form>
  );
};

