function accessSpotify() {
   const params = new URLSearchParams({
      response_type: 'code',
      client_id: '18292b93831e49c6a52ad6b5291159c7',
      scope: 'user-read-private user-read-email',
      redirect_uri: 'https://lyster.netlify.app'
   });

   window.location.href = `https://accounts.spotify.com/authorize?${params.toString()}`;
   console.log(window.location.search);
}

export default accessSpotify;