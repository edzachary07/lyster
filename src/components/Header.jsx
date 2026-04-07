import SearchBar from './SearchBar.jsx';
import styles from '../styles/Header.module.css';
import {accessSpotify, fetchAccessToken} from '../modules/spotifyAccess.js';

function Header() {
   return (
      <div className={styles.header}>
         <h1 className={styles.title} >Lyster</h1>
         <p>Simplified Spotify playlist creation</p>
         <SearchBar className={styles.searchBar} />
         <button onClick={accessSpotify} >Login</button>
         <button onClick={fetchAccessToken}>Access Token</button>
      </div>
   )
}

export default Header;