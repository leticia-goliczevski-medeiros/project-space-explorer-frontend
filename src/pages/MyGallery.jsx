import { useContext } from "react";

import MainLayout from "../layouts/MainLayout";
import Gallery from "../components/Main/Gallery/Gallery";
import Popup from "../components/Main/Popup/Popup";
import Preloader from "../components/Preloader/Preloader";

import PopupContext from "../contexts/PopupContext";
import PhotosContext from "../contexts/PhotosContext";
import IsGalleryLoadingContext from "../contexts/IsGalleryLoadingContext";

function MyGallery() {
  const { popup } = useContext(PopupContext);
  const { myPhotos } = useContext(PhotosContext);
  const { isGalleryLoading } = useContext(IsGalleryLoadingContext);

  return (
    <MainLayout>
      { isGalleryLoading? 
        <Preloader />
      :
        <Gallery array={myPhotos}/>
      }

      {popup && (
        <Popup>
          {popup.children}
        </Popup>
      )}
    </MainLayout>
  )
}

export default MyGallery;