async function accessSpotify() {
   try {
      const response = await fetch('https://accounts.spotify.com/authorize?' + querystring.stringify({
         response_type: 'code',
         client_id: client_id,
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