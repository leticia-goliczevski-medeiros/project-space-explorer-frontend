import './LoginForm.css';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { ErrorMessage } from "@hookform/error-message";
import validator from "validator";

import { mainApi } from '../../../utils/MainApi'; 

import IsLoggedInContext from '../../../contexts/IsLoggedInContext';
import PhotosContext from '../../../contexts/PhotosContext';
import IsGalleryLoadingContext from '../../../contexts/IsGalleryLoadingContext';
import CurrentUserContext from '../../../contexts/CurrentUserContext';

function LoginForm() {
  const { setIsLoggedIn } = useContext(IsLoggedInContext);
  const { setMyPhotos } = useContext(PhotosContext);
  const { setCurentUser } = useContext(CurrentUserContext);
  const { setIsGalleryLoading } = useContext(IsGalleryLoadingContext);
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm({mode: "onChange"});

  function handleUserLogin({password, email}) {
    mainApi.login({ password, email })
      .then((data)=> {
        setIsLoggedIn(true);
        localStorage.setItem("UserIdentifier", data.token);
        setIsGalleryLoading(true);

        mainApi
          .getUser(data.token)
          .then((userObject) => {
            setCurentUser(userObject);
            localStorage.setItem("CurrentUser", JSON.stringify(userObject));
          })
          .catch((error) => {
            console.error(error);
          })
          
        mainApi
          .getUserGallery(data.token)
          .then((user) => {
            setMyPhotos(user.gallery);
          })
          .catch((error) => {
            console.error(error);
          })
          .finally(()=> setIsGalleryLoading(false));
      })
      .catch((error) => console.error(error))
      .finally(()=> navigate("/mygallery")); 
  }

  function onSubmit(data) {
    const {password, email} = data;
    handleUserLogin({password, email});
  };

  return (
    <form 
      name='login-form'
      onSubmit={handleSubmit(onSubmit)}
      className="form"
      noValidate>

      <h2 className='form__title'>Log In to Your Account</h2>
      
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
        Log in
      </button>

      <p className='form__text'>Not a member yet? <Link to="/signup" className='form__link' >Sign up here!</Link> </p>
    </form> 
  )
}

export default LoginForm;