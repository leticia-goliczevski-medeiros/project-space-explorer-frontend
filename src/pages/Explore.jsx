import { useState, useContext, useEffect } from "react";

import MainLayout from "../layouts/MainLayout";
import ExploreForm from "../components/Main/exploreForm/exploreForm.jsx";
import ExploreStatus from "../components/Main/ExploreStatus/ExploreStatus.jsx";
import Gallery from '../components/Main/Gallery/Gallery.jsx';

import PhotosContext from "../contexts/PhotosContext.js";

function Explore() {
  const { photos, setPhotos, isLoadingPhotos, error } = useContext(PhotosContext);
  const [displayedPhotos, setDisplayedPhotos] = useState(3);

    useEffect(() => {
    const allPhotos = localStorage.getItem('allPhotos');
    if (allPhotos) {
      setPhotos(JSON.parse(allPhotos));
    }
  }, [setPhotos]);

  const showMore = () => {
    setDisplayedPhotos((prev) => prev + 3);
  };

  const hasMore = photos.length > displayedPhotos;

  return (
    <MainLayout>
      <ExploreForm />

      <ExploreStatus />
      
      
      {!isLoadingPhotos && !error && photos.length > 0 && (
        <>
          <Gallery array={photos.slice(0, displayedPhotos)} />
          {hasMore && (
            <button onClick={()=> showMore()} className="gallery__show-more-button">
              Show More
            </button>
          )}
        </>
      )}
    </MainLayout>
  )
}

export default Explore;