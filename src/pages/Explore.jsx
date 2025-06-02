import { useState, useContext, useEffect } from "react";

import MainLayout from "../layouts/MainLayout";
import ExploreForm from "../components/Main/exploreForm/exploreForm.jsx";
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
      <section className="explore">
        <ExploreForm />
      </section>

      {isLoadingPhotos && <p className="gallery__search-status">Loading...</p>}
      {!isLoadingPhotos && error && <p className="gallery__search-status">{error}</p>}
      {!isLoadingPhotos && !error && photos.length === 0 && <p className="gallery__search-status">Sorry, nothing was found.</p>}
      
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