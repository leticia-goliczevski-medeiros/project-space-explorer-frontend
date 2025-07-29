import './Gallery.css';

import Card from './Card/Card.jsx';


function Gallery({array}) {
  return (
    <section className="gallery">
      {array.length === 0? 
        <p className='gallery__message'>No photos here yet. Check out our Explore page!</p>
      :
        <ul className="gallery__cards">
          {array.map(card=> (
            <Card card={card} key={card.date}  />
          ))}
        </ul>
      }
    </section>
  )
}

export default Gallery;