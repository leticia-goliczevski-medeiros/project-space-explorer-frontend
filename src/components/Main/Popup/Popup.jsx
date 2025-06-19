import './Popup.css';
import { useContext, useEffect, useRef } from 'react';

import closeIcon from '../../../images/close-icon.png';

import PopupContext from '../../../contexts/PopupContext';

function Popup({children}) {
  const { popup, setPopup } = useContext(PopupContext);
  const containerRef = useRef(null);


  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setPopup(null);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [setPopup]);

  const handleOutsideClick = (e) => {
    if (containerRef.current && !containerRef.current.contains(e.target)) {
      setPopup(null);
    }
  };
  
  return (
    <section className="popup" onMouseDown={handleOutsideClick}>
      <div className={popup.registration? "popup__container popup__container_registration" : "popup__container"} ref={containerRef}>
        <img
          className="popup__close-icon"
          src={closeIcon}
          alt="Close icon."
          onClick={()=> setPopup(null)}
        />

        {children}
      </div>
    </section>
  )
}

export default Popup;