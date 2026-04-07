import './App.css';
import Header from './components/Header.jsx';
import SearchResults from './components/SearchResults.jsx';
import Playlist from './components/Playlist.jsx';
import {useState} from 'react';

const songData = [
  {
    songName: 'testSongName1',
    artist: 'testArtist1',
    album: 'testAlbum1',
    albumImgSrc: 'dist/testAlbumImg1.jpg',
    uri: 'uri1'
  },
  {
    songName: 'testSongName2',
    artist: 'testArtist2',
    album: 'testAlbum2',
    albumImgSrc: '../public/testAlbumImg2.jpg',
    uri: 'uri2'
  }
];

function App() {
  const [addedSongs, setAddedSongs] = useState([]);
  const [playlistName, setPlaylistName] = useState('');

  function addSong(songToAdd) {
    setAddedSongs((prev) => {return [...prev, songToAdd]});
  }

  function removeSong(songToRemove) {
    setAddedSongs((addedSongs.filter((song) => song.songName != songToRemove.songName)));
  }

  function changePlaylistName(input) {
    setPlaylistName(input);
   }

  function savePlaylistToSpotify() {
    const savedPlaylist = addedSongs.map((song) => song.uri);
    console.log(savedPlaylist);
  }

  return (
    <div>
      <Header />
      <SearchResults results={songData} addSong={addSong} />
      <Playlist addedSongs={addedSongs} removeSong={removeSong} changePlaylistName={changePlaylistName} playlistName={playlistName} savePlaylistToSpotify={savePlaylistToSpotify} />
    </div>
  )
}

export default App;
