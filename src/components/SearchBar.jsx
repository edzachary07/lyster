import { useState } from 'react';
import styles from '../styles/SearchBar.module.css';

function SearchBar() {
   const [userInput, setUserInput] = useState('Search');

   function handleInput(e) {
      setUserInput(e.target.value);
   }

   return (
      <div className={styles.searchBarWrapper}>
         <form action="">
            <input id='search-bar' className={styles.searchBar} type="text" value={userInput} placeholder={'Search...'} onChange={handleInput} />
         </form>
      </div>
   )
}

export default SearchBar;