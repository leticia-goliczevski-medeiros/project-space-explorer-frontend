import './RegisterForm.css';
import { Link } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { ErrorMessage } from "@hookform/error-message";
import validator from "validator";

function RegisterForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({mode: "onChange"});

  function onSubmit() {
  };

  return (
    <form 
    name='register-form'
    onSubmit={handleSubmit(onSubmit)}
    className="form"
    noValidate>

      <h2 className='form__title'>Create an Account</h2>
      
      <div className="form__inputs">
        <input
          name="email"
          { ...register('email', {
            required: "This field is required.", 
            validate: {
              isEmail: (v)=> validator.isEmail(v) || "You must enter a valid email."
            }
          })}
          className="form__input"
          type="email"
          placeholder="Email"
        />

        <ErrorMessage errors={errors} name="email" render={({ message }) => <p className='form__input-error form__input-error_email'>{message}</p>} />

        <input
          name="password"
          { ...register('password', {
            required: "This field is required."
          })} 
          className="form__input"
          type="password"
          placeholder="Password"
        />

        <ErrorMessage errors={errors} name="password" render={({ message }) => <p className='form__input-error form__input-error_password'>{message}</p>} />
      </div>

      <button
        className="form__submit-button"
        type="submit"
      >
        Sign Up
      </button>

      <p className='form__text'>Already a member? <Link to="/signin" className='form__link' >Log in here!</Link> </p>
    </form> 
  )
}

export default RegisterForm;