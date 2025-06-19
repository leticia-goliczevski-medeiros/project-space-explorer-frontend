import './PictureOfTheDay.css';
import { useContext, useState, useEffect } from 'react';

import starIcon from '../../../images/star-icon.png';
import starIconActive from '../../../images/star-icon-active.png';

import SearchStatus from '../SearchStatus/SearchStatus.jsx';

import IsLoggedInContext from '../../../contexts/IsLoggedInContext';
import PhotosContext from '../../../contexts/PhotosContext.js'

import { api } from '../../../utils/APODApi.js';

function PictureOfTheDay() {
  const { isLoggedIn } = useContext(IsLoggedInContext);
  const { isLoading, setIsLoading } = useContext(PhotosContext);

  const [currentPhoto, setCurrentPhoto] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    api.getCurrentPhoto()
      .then((data) => setCurrentPhoto(data))
      .catch((error) => {
        console.error(error);
        setError(error);
      })
      .finally(()=> setIsLoading(false))
  }, []);

  return (
    <section className="picture-of-the-day">
      <h2 className="picture-of-the-day__title">Astronomy Picture of the Day</h2>

      <SearchStatus isLoading={isLoading} error={error} noResults={!isLoading && !error && !currentPhoto} />

      {!isLoading && !error && currentPhoto && (
        <div className="picture-of-the-day__wrapper">
          <img
            className="picture-of-the-day__photo"
            src={currentPhoto?.url}
            alt={currentPhoto?.title || 'Photo of the day.'}
          />
          {isLoggedIn && <img className='picture-of-the-day__star-icon' src={starIcon} alt='Star icon.' />}
          <div className="picture-of-the-day__photo-data">
            <h3 className="picture-of-the-day__photo-title">{currentPhoto?.title || 'Sorry, title not found.'}</h3>
            <p className="picture-of-the-day__photo-paragraph">{currentPhoto?.explanation || 'Description not found.'}</p>
            <p className="picture-of-the-day__photo-paragraph">Date(YYYY-MM-DD): {currentPhoto?.date || 'Date not found.'}</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default PictureOfTheDay;