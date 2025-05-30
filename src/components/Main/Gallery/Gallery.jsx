import Card from './Card/Card.jsx';

function Gallery() {
  return (
    <section className="gallery">
      <ul className="gallery__cards">
        {cards.map(card=> (
          <Card card={card} key={card._id}/>
        ))}
      </ul>
    </section>
  )
}

export default Gallery;