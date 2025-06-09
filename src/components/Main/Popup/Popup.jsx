import './Popup.css';
import { useContext } from 'react';

import closeIcon from '../../../images/close-icon.png';

import PopupContext from '../../../contexts/PopupContext';

function Popup({children}) {
  const { popup, setPopup } = useContext(PopupContext);
  
  return (
    <section className="popup">
      <div className={popup.registration? "popup__container popup__container_registration" : "popup__container"}>
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