import TrackList from './Tracklist.jsx';
import styles from '../styles/Playlist.module.css';

function Playlist(props) {
   function handleChange(e) {
      props.changePlaylistName(e.target.value);
   }

   function handleClick() {
      props.savePlaylistToSpotify();
   }

   return (
      <div className={styles.playlistWrapper}>
         <div className={styles.playlistHeaderContainer}>
            <div className={styles.playlistImgWrapper} ><img className={styles.playlistImg} src='../../public/testPlaylistImg.jpg' alt="" /></div>
            <input className={styles.playlistName} type="text" placeholder='Enter playlist name' value={props.playlistName} onChange={handleChange} />
            <button className={styles.savePlaylistButton} onClick={handleClick} >Save to Spotify</button>
         </div>
         <TrackList addedSongs={props.addedSongs} removeSong={props.removeSong} />
      </div>
   )
}

export default Playlist;