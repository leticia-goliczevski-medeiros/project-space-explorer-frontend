import { useContext } from 'react';

import starIcon from '../../../../images/star-icon.png';

import ImagePopup from '../../Popup/ImagePopup/ImagePopup';

import PopupContext from '../../../../contexts/PopupContext';

function Card({card}) {
  const { setPopup } = useContext(PopupContext);

  const thumbnail = card.media_type === 'video' ? card.thumbnail_url : card.url;

  const imagePopup = { children: <ImagePopup card={card} />};

  return (
    <li className="gallery__card" >
      <img
        className='gallery__card-image'
        src={thumbnail}
        alt={card.title}
        onClick={()=> setPopup(imagePopup)}
      />
      <img
        className="gallery__card-star"
        src={starIcon}
        alt="Star icon."
      /> 
    </li>
  )
}

export default Card;