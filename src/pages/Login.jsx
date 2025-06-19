import MainLayout from "../layouts/MainLayout";
import LoginForm from "../components/Main/LoginForm/LoginForm";

function Login() {
  return (
    <MainLayout>
      <section className='login'>
        <LoginForm />
      </section>
    </MainLayout>
  )
}

export default Login;