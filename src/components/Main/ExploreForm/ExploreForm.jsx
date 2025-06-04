import './ExploreForm.css';
import { useContext } from "react";
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import validator from 'validator';

import { api } from '../../../utils/APODApi.js';

import PhotosContext from "../../../contexts/PhotosContext.js";

function ExploreForm() {
  const { setPhotos, setIsLoadingPhotos, setError } = useContext(PhotosContext);

  const { register, handleSubmit, formState: { errors } } = useForm({mode: "onChange"});

  function onSubmit(data) {
    const { startDate, endDate } = data;
    setIsLoadingPhotos(true);
    setError('');

    api.getAllPhotos(startDate, endDate)
      .then((photos)=> {
        setPhotos(photos);
        localStorage.setItem('allPhotos', JSON.stringify(photos));
      })
      .catch((error) => {
        console.error(error);
        setError("Sorry, something went wrong with the request. There might be a connection problem or the server might be down. Please try again later.");
      })
      .finally(() => setIsLoadingPhotos(false));
  };

  return (
    <section className="explore">
      <h2 className='explore__title'>Browse by date:</h2>
      <form 
        name='explore-form'
        onSubmit={handleSubmit(onSubmit)}
        className="explore__form"
        noValidate>
        
       
          <div className="explore__input-info">
            <label className='explore__label' for='start-date' >Start date:</label>
            <input
                className='explore__input'
                type="date"
                id="start-date"
                {...register('startDate', {
                  required: 'This field is required.',
                  validate: (v) => validator.isDate(v) || 'You must enter a valid date.'
                })}
              />
            
            <ErrorMessage errors={errors} name="startDate" render={({ message }) => <p className='explore__input-error explore__input-error_start-date'>{message}</p>} />
          </div>

          <div className="explore__input-info">
            <label className='explore__label' for='end-date' >End date:</label>
            <input
                className='explore__input'
                type="date"
                id='end-date'
                {...register('endDate', {
                  required: 'This field is required.',
                  validate: (v) => validator.isDate(v) || 'You must enter a valid date.'
                })}
              />
            <ErrorMessage errors={errors} name="endDate" render={({ message }) => <p className='explore__input-error explore__input-error_end-date'>{message}</p>} />
          </div>

        <button
          className="explore__submit-button"
          type="submit"
        >
          Search
        </button>
      </form> 
    </section>
  )
}

export default ExploreForm;