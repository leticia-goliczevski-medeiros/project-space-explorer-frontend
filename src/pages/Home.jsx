import { useContext } from 'react';

import MainLayout from "../layouts/MainLayout";
import Welcome from '../components/Main/Welcome/Welcome';
import PictureOfTheDay from '../components/Main/PictureOfTheDay/PictureOfTheDay';

import IsLoggedInContext from '../contexts/IsLoggedInContext';

function Home() {
  const { isLoggedIn } = useContext(IsLoggedInContext);

  return (
    <MainLayout>
      {!isLoggedIn &&  <Welcome />}

      {/* <PictureOfTheDay /> */}
    </MainLayout>
  )
}

export default Home;