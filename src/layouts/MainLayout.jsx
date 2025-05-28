import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';

function MainLayout({ children }){
  return (
    <>
      <Header />
        {children} 
      <Footer />
    </>
  )
}

export default MainLayout;