import Track from './Track.jsx';
import generateRandomKey from '../modules/helperFunctions.js';
import styles from '../styles/Tracklist.module.css';

function TrackList(props) {
   function handleRemoveSong(song) {
      props.removeSong(song);
   }

   return (
      <div className={styles.tracklistWrapper} >
         <ul>
            {props.addedSongs.map((song) => {
               return <Track songName={song.songName} artist={song.artist} album={song.album} albumImgSrc={song.albumImgSrc} handleSong={handleRemoveSong} song={song} key={generateRandomKey()} inputType='X' />
            })}
         </ul>
      </div>
   )
}

export default TrackList;