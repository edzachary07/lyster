async function accessSpotify() {
   try {
      const response = await fetch('https://accounts.spotify.com/authorize?' + JSON.stringify({
         response_type: 'code',
         client_id: '18292b93831e49c6a52ad6b5291159c7',
         scope: 'user-read-private user-read-email',
         redirect_uri: 'http://127.0.0.1:8888/callback'
    }));
    if (response.ok) {
      const jsonResponse = await response.json();

    }
    throw new Error('Request failed');
   } catch (error) {
      console.log(error);
   }
}

export default accessSpotify;