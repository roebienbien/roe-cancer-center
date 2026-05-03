import { useLogin } from "../useLogin";
import { useForm } from "react-hook-form";
import { LoginFormData, loginSchema } from "../login-schema";
import Input from "@/components/ui/Input";
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from "@/components/ui/button/Button";
import './LoginForm.scss'

export default function LoginForm() {
  const { mutate, isPending, error } = useLogin();


  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      // email: "margaret.beatty@example.com",
      // password: "Password123!"
    },
  })

  const onSubmit = (data: LoginFormData) => {
    console.log(JSON.stringify(data));
    mutate(data);
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login-form">
      <div className="login-form__wrapper">
        <Input<LoginFormData> id='email' label={"Email"} type="email" register={register} errors={errors} />
        <Input<LoginFormData> id='password' label={"password"} type="password" register={register} errors={errors} />
      </div>

      <Button type="submit" disabled={isPending} className="login-form__submit">
        {isPending ? "Logging in" : "Login"}
      </Button>
      {error && <p className="login-form__error">Login failed</p>}
    </form>
  );
};

