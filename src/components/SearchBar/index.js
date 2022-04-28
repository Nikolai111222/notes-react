import './index.sass'

function SearchBar () {
  return (
    <div className='search_bar'>
      <span className='search_bar__icon' />
      <input type="text" placeholder="Start typing to find notes..." className='search_bar__input' />
    </div>
  )
}

export default SearchBar;
