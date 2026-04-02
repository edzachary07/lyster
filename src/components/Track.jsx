import styles from '../styles/Track.module.css';

function Track(props) {
function handleSubmit(e) {
   e.preventDefault();
   props.handleSong(props.song);
}

   return (
      <div className={styles.trackWrapper}>
         <div className={styles.trackImgWrapper}><img className={styles.trackImg} src={props.albumImgSrc} alt="" /></div>
         <h3>{props.songName}</h3>
         <h4>{props.artist}</h4>
         <h5>{props.album}</h5>
         <form onSubmit={handleSubmit}><input type="submit" value={props.inputType} /></form>
      </div>
   )
}

export default Track;