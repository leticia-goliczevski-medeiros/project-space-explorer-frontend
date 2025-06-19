import { useContext } from "react";

import MainLayout from "../layouts/MainLayout";
import RegisterForm from "../components/Main/RegisterForm/RegisterForm";
import Popup from "../components/Main/Popup/Popup";

import PopupContext from "../contexts/PopupContext";

function Register() {
  const {popup} = useContext(PopupContext);

  return (
    <MainLayout>
      <section className="register">
        <RegisterForm />

        {popup && (
          <Popup>
            {popup.children}
          </Popup>
        )}
      </section>
    </MainLayout>
  )
}

export default Register;