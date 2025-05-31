import Card from './Card/Card.jsx';

function Gallery({array}) {
  return (
    <section className="gallery">
      <ul className="gallery__cards">
        {array.map(card=> (
          <Card card={card} key={card._id}/>
        ))}
      </ul>
    </section>
  )
}

export default Gallery;