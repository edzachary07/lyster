import SearchBar from './SearchBar.jsx';
import styles from '../styles/Header.module.css';

function Header() {
   return (
      <div className={styles.header}>
         <h1 className={styles.title} >Lyster</h1>
         <p>Simplified Spotify playlist creation</p>
         <SearchBar className={styles.searchBar} />
      </div>
   )
}

export default Header;