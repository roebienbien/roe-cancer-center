import LoginForm from "../components/LoginForm"
import './LoginPage.scss'
import { Dashboard } from "@/features/users/Dashboard";

const LoginPage = () => {

  return (
    <div className="login-page">
      <div className="login-page__wrapper">
        <h2 className="heading heading--2 login-page__title">Login Page</h2>
        <LoginForm />
      </div>
      <Dashboard />
    </div>
  )
}

export default LoginPage
