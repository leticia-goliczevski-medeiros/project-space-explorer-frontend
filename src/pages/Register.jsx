import MainLayout from "../layouts/MainLayout";
import RegisterForm from "../components/Main/RegisterForm/RegisterForm";

function Register() {
  return (
    <MainLayout>
      <section className="register">
        <RegisterForm />
      </section>
    </MainLayout>
  )
}

export default Register;