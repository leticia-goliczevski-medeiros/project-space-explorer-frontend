import { useContext } from "react";

import MainLayout from "../layouts/MainLayout";
import Gallery from "../components/Main/Gallery/Gallery";
import Popup from "../components/Main/Popup/Popup";

import PopupContext from "../contexts/PopupContext";

function MyGallery() {
  const {popup} = useContext(PopupContext);
  const myCards = []

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