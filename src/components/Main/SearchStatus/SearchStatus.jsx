import './SearchStatus.css';

import Preloader from '../../Preloader/Preloader.jsx';

function SearchStatus({ isLoading, error, noResults }) {
  return (
    <section className='search-status'>
      {isLoading && <Preloader />}
      {!isLoading && error && <p className="search-status__paragraph">{error}</p>}
      {!isLoading && !error && noResults && <p className="search-status__paragraph">Sorry, nothing was found.</p>}
    </section>
  )
}

export default SearchStatus;