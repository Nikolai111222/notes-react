import SearchBar from 'components/SearchBar';
import './index.sass'

function Header () {
  return (
    <header>
      <span className='header_logo'>notes</span>
      <SearchBar />
    </header>
  )
}

export default Header;
