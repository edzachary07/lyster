import Track from './Track.jsx';
import generateRandomKey from '../modules/helperFunctions.js';
import styles from '../styles/SearchResults.module.css';

function SearchResults(props) {
   function handleAddSong(song) {
      props.addSong(song);
   }

   return (
      <div className={styles.searchResultsWrapper} >
         <h2 className={styles.resultsHeader} >Search Results:</h2>
         <ul>
            {
               props.results.map((song) => (
                  <Track songName={song.songName} artist={song.artist} album={song.album} albumImgSrc={song.albumImgSrc} handleSong={handleAddSong} song={song} key={generateRandomKey()} inputType='+' />
               ))
            }
         </ul>
      </div>
   )
}

export default SearchResults;