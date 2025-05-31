import { useContext } from "react";
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import validator from 'validator';

import { api } from '../../../utils/APODApi.js';

import PhotosContext from "../../../contexts/PhotosContext.js";

function ExploreForm() {
  const { setPhotos } = useContext(PhotosContext);

  const { register, handleSubmit, formState: { errors } } = useForm({mode: "onChange"});

  function onSubmit(data) {
    const { startDate, endDate } = data;
    api.getAllPhotos(startDate, endDate)
      .then((photos)=> {
        setPhotos(photos);
      })
      .catch((error) => console.error(error))
  };

  return (
    <>
      <h2 className='explore__title'>Browse by date:</h2>
      <form 
        name='explore-form'
        onSubmit={handleSubmit(onSubmit)}
        className="explore__form"
        noValidate>
        
        <div className="explore__inputs">
          <label className='explore__label'>
            Start date:
            <input
              type="date"
              {...register('startDate', {
                required: 'This field is required.',
                validate: (v) => validator.isDate(v) || 'You must enter a valid date.'
              })}
            />
          </label>
          
          <ErrorMessage errors={errors} name="startDate" render={({ message }) => <p className='explore__input-error explore__input-error_start-date'>{message}</p>} />

          <label>
            End date:
            <input
              type="date"
              {...register('endDate', {
                required: 'This field is required.',
                validate: (v) => validator.isDate(v) || 'You must enter a valid date.'
              })}
            />
          </label>

          <ErrorMessage errors={errors} name="endDate" render={({ message }) => <p className='explore__input-error explore__input-error_end-date'>{message}</p>} />
        </div>

        <button
          className="explore__submit-button"
          type="submit"
        >
          Search
        </button>
      </form> 
    </>
  )
}

export default ExploreForm;