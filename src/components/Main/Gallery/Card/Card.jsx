import starIcon from '../../../../images/star-icon.png';
import starIconActive from '../../../../images/star-icon-active.png';

function Card({card}) {
   const thumbnail = card.media_type === 'video' ? card.thumbnail_url : card.url;

  return (
    <li className="gallery__card" >
      <img
        className='gallery__card-image'
        src={thumbnail}
        alt={card.title}
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