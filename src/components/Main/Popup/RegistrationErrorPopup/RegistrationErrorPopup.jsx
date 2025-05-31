import warningCircle from '../../../../images/warning-circle.png';

function RegistrationErrorPopup() {
  return (
    <>
      <img className="popup__image" src={warningCircle} alt='Warning icon.'/>
      <h2 className="popup__title"></h2>
    </>
  )
}

export default RegistrationErrorPopup;