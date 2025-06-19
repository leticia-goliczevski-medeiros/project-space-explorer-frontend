import checkCircle from '../../../../images/check-circle.png';

function RegistrationPopup() {
  return (
    <>
      <img className="popup__registration-image" src={checkCircle} alt='Check icon.'/>
      <h2 className="popup__title">Success! You’re now registered!</h2>
    </>
  )
}

export default RegistrationPopup;