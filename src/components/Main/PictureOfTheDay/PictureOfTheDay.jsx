import './PictureOfTheDay.css';
import { useContext, useState, useEffect } from 'react';

import brokenImage from '../../../images/broken-image.png';
import starIcon from '../../../images/star-icon.png';
import starIconActive from '../../../images/star-icon-active.png';

import IsLoggedInContext from '../../../contexts/IsLoggedInContext';

import { api } from '../../../utils/APODApi.js';

function PictureOfTheDay() {
  const { isLoggedIn } = useContext(IsLoggedInContext);

  const [currentPhoto, setCurrentPhoto] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.getCurrentPhoto()
      .then((data) => setCurrentPhoto(data))
      .catch((error) => {
        console.error(error);
        setError(error);
      });
  }, []);

  return (
    <section className="picture-of-the-day">
      <h2 className="picture-of-the-day__title">Astronomy Picture of the Day</h2>

      <div className="picture-of-the-day__wrapper">
        <img className="picture-of-the-day__photo" src={currentPhoto?.url || brokenImage} alt={currentPhoto?.title || 'Photo of the day.'} />

        {isLoggedIn && <img className='picture-of-the-day__star-icon' src={starIcon} alt='Star icon.'/>}

        <div className="picture-of-the-day__photo-data">
          <h3 className="picture-of-the-day__photo-title">{currentPhoto?.title || 'Sorry, title not found.'}</h3>
          <p className="picture-of-the-day__photo-paragraph">{currentPhoto?.explanation || 'Description not found.'}</p>
          <p className="picture-of-the-day__photo-paragraph">Date(YYYY-MM-DD): {currentPhoto?.date || 'Date not found.'}</p>
        </div>
      </div>
    </section>
    
  )
}

export default PictureOfTheDay;