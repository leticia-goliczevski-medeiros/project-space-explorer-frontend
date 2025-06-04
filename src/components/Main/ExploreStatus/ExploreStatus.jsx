import './ExploreStatus.css';
import { useContext } from 'react';

import PhotosContext from "../../../contexts/PhotosContext";

function ExploreStatus() {
  const { photos, isLoadingPhotos, error } = useContext(PhotosContext);

  return (
    <section className='explore-status'>
      {isLoadingPhotos && <p className="explore-status__search-status">Loading...</p>}
      {!isLoadingPhotos && error && <p className="explore-status__search-status">{error}</p>}
      {!isLoadingPhotos && !error && photos.length === 0 && <p className="explore-status__search-status">Sorry, nothing was found.</p>}
    </section>
  )
}

export default ExploreStatus;