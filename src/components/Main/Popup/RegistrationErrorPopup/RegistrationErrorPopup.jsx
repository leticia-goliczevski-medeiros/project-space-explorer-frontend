import warningCircle from '../../../../images/warning-circle.png';

function RegistrationErrorPopup() {
  return (
    <>
      <img className="popup__registration-image" src={warningCircle} alt='Warning icon.'/>
      <h2 className="popup__title">Sorry, something went wrong. Please try again later.</h2>
    </>
  )
}

export default RegistrationErrorPopup;