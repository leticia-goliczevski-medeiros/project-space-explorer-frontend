import { useContext } from 'react';

import astronaut from '../../../images/astronaut.webp';
import starIcon from '../../../images/star-icon.png';
import starIconActive from '../../../images/star-icon-active.png';

import IsLoggedInContext from '../../../contexts/IsLoggedInContext';

function PictureOfTheDay() {
  const { isLoggedIn } = useContext(IsLoggedInContext);

  return (
    <section className="picture-of-the-day">
      <h2 className="picture-of-the-day__title">Astronomy Picture of the Day</h2>

      <div className="picture-of-the-day__wrapper">
        <img className="picture-of-the-day__photo" src={astronaut} alt="Photo of the day." />
        {isLoggedIn && <img src={starIcon} alt='Star icon.'/>}

        <div className="picture-of-the-day__photo-data">
          <h3 className="picture-of-the-day__photo-title">Lorem ipsum dolor, sit amet consectetur.</h3>
          <p className="picture-of-the-day__photo-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam maxime amet at iusto expedita, dicta obcaecati ex placeat ipsa excepturi soluta reiciendis corporis ut, iure aliquid porro suscipit optio. Laborum cum facilis at aliquid facere ad tempore excepturi quo culpa blanditiis adipisci, dolor omnis quod rem, veniam non fuga, ipsum ullam cumque maxime eaque architecto. Vel ipsam corporis tempore quas.</p>
          <p className="picture-of-the-day__photo-date">12/04/2003</p>
        </div>
      </div>
    </section>
    
  )
}

export default PictureOfTheDay;