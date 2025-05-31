import MainLayout from "../layouts/MainLayout";
import Gallery from "../components/Main/Gallery/Gallery";
import Popup from "../components/Main/Popup/Popup";

import PopupContext from "../contexts/PopupContext";

function MyGallery() {
  const {popup} = useContext(PopupContext);

  return (
    <MainLayout>
      <Gallery array={myCards}/>

      {popup && (
        <Popup>
          {popup.children}
        </Popup>
      )}
    </MainLayout>
  )
}

export default MyGallery;