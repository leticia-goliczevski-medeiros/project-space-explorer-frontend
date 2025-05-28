import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

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