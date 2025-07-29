import { useContext, useState, useEffect } from 'react';
import starIcon from '../../../../images/star-icon.png';
import starIconActive from '../../../../images/star-icon-active.png';

import CurrentUserContext from '../../../../contexts/CurrentUserContext';
import PhotosContext from '../../../../contexts/PhotosContext';
import { mainApi } from '../../../../utils/MainApi';

function ImagePopup({ card }) {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const { setMyPhotos } = useContext(PhotosContext);
  const token = localStorage.getItem('UserIdentifier');

  const [isLiked, setIsLiked] = useState(false);

  // Verifica se a foto está curtida
  useEffect(() => {
    const liked = currentUser.gallery?.some((item) => item.date === card.date);
    setIsLiked(liked);
  }, [currentUser, card.date]);

  function handleStarClick() {
    if (isLiked) {
      const likedPhoto = currentUser.gallery.find(item => item.date === card.date);

      if (!likedPhoto || !likedPhoto._id) {
        console.error("Erro: foto curtida não tem _id para remover.");
        return;
      }

      mainApi.removeCardLike(likedPhoto._id, token)
        .then((updatedUser) => {
          setCurrentUser(updatedUser);
          setMyPhotos(updatedUser.gallery);
          localStorage.setItem("CurrentUser", JSON.stringify(updatedUser));
          setIsLiked(false);
        })
        .catch((err) => console.error(err));
    } else {
      mainApi.addCardLike(card, token)
        .then((updatedUser) => {
          setCurrentUser(updatedUser);
          setMyPhotos(updatedUser.gallery);
          localStorage.setItem("CurrentUser", JSON.stringify(updatedUser));
          setIsLiked(true);
        })
        .catch((err) => console.error(err));
    }
  }

  return (
    <div className='popup__content'>
      {card.media_type === 'video' ? (
        <iframe
          className='popup__media'
          title={card.title}
          src={card.url}
          allowFullScreen
        ></iframe>
      ) : (
        <img className="popup__media" src={card.url} alt={card.title}/>
      )}

      <img
        className="popup__card-star"
        src={isLiked ? starIconActive : starIcon}
        alt="Star icon"
        onClick={handleStarClick}
      />

      <h2 className="popup__title">{card.title}</h2>
      <p className="popup__paragraph">{card.explanation}</p>
      <p className="popup__paragraph">Date (YYYY-MM-DD): {card.date}</p>
    </div>
  );
}

export default ImagePopup;
