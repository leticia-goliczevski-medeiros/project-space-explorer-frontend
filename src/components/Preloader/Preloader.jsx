import './Preloader.css'

function Preloader() {
 return (
  <div className="loader">
    <div className="loader__intern"></div>
    <div className="loader__external-shadow">
      <div className="loader__central"></div>
    </div>
  </div>
 )
}

export default Preloader;