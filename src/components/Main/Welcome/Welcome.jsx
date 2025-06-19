import './Welcome.css';
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <section className="welcome-section"> 
      <h2 className="welcome-section__title">Welcome to Space Explorer!</h2>

      <p className="welcome-section__paragraph">Your personal journey through the universe starts here.</p>
      <p className="welcome-section__paragraph">If you're fascinated by the mysteries of the cosmos, the vibrant colors of distant nebulas, or the stunning details of galaxies captured by space telescopes, this is the place for you.</p>
      <p className="welcome-section__paragraph">What is Space Explorer?</p>
      <p className="welcome-section__paragraph">Space Explorer is an app created for those who look up at the sky with curiosity. It connects directly to NASA’s official API, which releases a new Astronomy Picture of the Day (APOD) every day. Each image comes with an explanation written by astronomers, offering scientific context and fascinating insights about what you’re seeing. Here, you can:</p>

      <ul>
        <li className="welcome-section__paragraph welcome-section__list-item">Create your profile and build a personal gallery with the images that inspire you most;</li>
        <li className="welcome-section__paragraph welcome-section__list-item">Read accessible explanations, adapted so anyone can understand, even without a background in astronomy;</li>
        <li className="welcome-section__paragraph welcome-section__list-item">Explore the full archive of previous days and see how the sky has changed over time;</li>
        <li className="welcome-section__paragraph welcome-section__list-item">Rediscover the universe, day by day, with breathtaking images and stories behind each one.</li>
      </ul>

      <p className="welcome-section__paragraph">With AstroGallery, every day is a new chance to be amazed by the universe.</p>

      <Link to="/signin"><p className="welcome-section__link">Start now</p></Link>
    </section>
  )
}

export default Welcome;