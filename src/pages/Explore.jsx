import { useContext } from "react";

import MainLayout from "../layouts/MainLayout";
import ExploreForm from "../components/Main/exploreForm/exploreForm.jsx";
import Gallery from '../components/Main/Gallery/Gallery.jsx';

import PhotosContext from "../contexts/PhotosContext.js";

function Explore() {
  const { photos } = useContext(PhotosContext);

  return (
    <MainLayout>
      <section className="explore">
        <ExploreForm />
        <Gallery array={photos}/>
      </section>
    </MainLayout>
  )
}

export default Explore;