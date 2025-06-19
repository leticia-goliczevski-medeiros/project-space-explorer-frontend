import { useState, useContext, useEffect } from "react";

import MainLayout from "../layouts/MainLayout";
import ExploreForm from "../components/Main/ExploreForm/ExploreForm.jsx";
import SearchStatus from "../components/Main/SearchStatus/SearchStatus.jsx";
import Gallery from '../components/Main/Gallery/Gallery.jsx';

import PhotosContext from "../contexts/PhotosContext.js";

function Explore() {
  const { photos, setPhotos, isLoading, error } = useContext(PhotosContext);
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

      <SearchStatus isLoading={isLoading} error={error} noResults={!isLoading && !error && photos.length === 0} />
      
      
      {!isLoading && !error && photos.length > 0 && (
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