import { useState, useEffect, useContext } from 'react';

import starIcon from '../../../../images/star-icon.png';
import starIconActive from '../../../../images/star-icon-active.png';

import ImagePopup from '../../Popup/ImagePopup/ImagePopup';

import { mainApi } from '../../../../utils/MainApi';

import PopupContext from '../../../../contexts/PopupContext';
import CurrentUserContext from '../../../../contexts/CurrentUserContext';
import PhotosContext from '../../../../contexts/PhotosContext';

function Card({ card }) {
  const { setPopup } = useContext(PopupContext);
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const { setMyPhotos } = useContext(PhotosContext);
  const token = localStorage.getItem('UserIdentifier');

  const thumbnail = card.media_type === 'video' ? card.thumbnail_url : card.url;

  const imagePopup = { children: <ImagePopup card={card} />};

  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const liked = currentUser.gallery?.some((item) =>  item.date === card.date);
    setIsLiked(liked);
  }, [currentUser, card._id]);

  function handleCardLike() {
    if (isLiked) {
      const likedPhoto = currentUser.gallery.find(item => item.date === card.date);

      mainApi.removeCardLike(likedPhoto._id, token)
        .then((updatedUser)=> {
          setCurrentUser(updatedUser);
          localStorage.setItem("CurrentUser", JSON.stringify(updatedUser));
          setMyPhotos(updatedUser.gallery);
          setIsLiked(false);
        })
        .catch((error) => console.error(error))
    } else {
      mainApi.addCardLike(card, token)
        .then((updatedUser)=> {
          setCurrentUser(updatedUser);
          localStorage.setItem("CurrentUser", JSON.stringify(updatedUser));
          setMyPhotos(updatedUser.gallery);
          setIsLiked(true);
        })
        .catch((error) => console.error(error))
    }
  }

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
        src={isLiked? starIconActive : starIcon }
        alt="Star icon."
        onClick={handleCardLike}
      /> 
    </li>
  )
}

export default Card;