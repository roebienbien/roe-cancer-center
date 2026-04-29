import { useLogin } from "../useLogin";
import { useForm } from "react-hook-form";
import { LoginFormData, loginSchema } from "../login-schema";
import Input from "@/components/ui/input/Input";
import { zodResolver } from '@hookform/resolvers/zod'

export default function LoginForm() {
  const { mutate, isPending, error } = useLogin();


  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "margaiaaret.beatty@example.com",
      password: "Password123!"
    },
    // mode: "onSubmit", // or onBlur
    // reValidateMode: "onChange"
  })

  const onSubmit = (data: LoginFormData) => {
    console.log("submitting login")
    console.log(JSON.stringify(data));
    mutate(data);
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <input */}
      {/*   type="email" */}
      {/*   {...register("email")} */}
      {/* /> */}
      {/* {errors.email && <p>{errors.email.message}</p>} */}
      <Input<LoginFormData> id='email' label={"Email"} type="email" register={register} errors={errors} />
      <Input<LoginFormData> id='password' label={"password"} type="password" register={register} errors={errors} />

      <button type="submit" disabled={isPending}>
        {isPending ? "Logging in..." : "Login"}
      </button>

      {error && <p>Login failed</p>}
    </form>
  );
};

