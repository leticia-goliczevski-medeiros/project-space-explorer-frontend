import closeIcon from '../../../images/close-icon.png';

function Popup({children}) {
  return (
    <section className="popup">
      <div className="popup__container">
        <img
          className="popup__close-icon"
          src={closeIcon}
          alt="Close icon."
        />

        {children}
      </div>
    </section>
  )
}

export default Popup;