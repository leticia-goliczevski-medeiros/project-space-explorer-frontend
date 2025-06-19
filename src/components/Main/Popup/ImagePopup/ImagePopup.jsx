import starIcon from '../../../../images/star-icon.png';

function ImagePopup({card}) {
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
        src={starIcon}
        alt="Star icon."
      /> 

        <h2 className="popup__title">{card.title}</h2>
        
        <p className="popup__paragraph">{card.explanation}</p>
        <p className="popup__paragraph">Date(YYYY-MM-DD): {card.date}</p>
    </ div>
  )
}

export default ImagePopup;