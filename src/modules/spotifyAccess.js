// async function accessSpotify() {
//    try {
//       const response = await fetch('https://accounts.spotify.com/authorize?' + JSON.stringify({
//          response_type: 'code',
//          client_id: '18292b93831e49c6a52ad6b5291159c7',
//          scope: 'user-read-private user-read-email',
//          redirect_uri: 'https://lyster.netlify.app/callback'
//     }));
//     if (response.ok) {
//       const jsonResponse = await response.json();

//     }
//     throw new Error('Request failed');
//    } catch (error) {
//       console.log(error);
//    }
// }

function accessSpotify() {
   const params = new URLSearchParams({
      response_type: 'code',
      client_id: '18292b93831e49c6a52ad6b5291159c7',
      scope: 'user-read-private user-read-email',
      redirect_uri: 'https://lyster.netlify.app'
   });

   window.location.href = `https://accounts.spotify.com/authorize?${params.toString()}`;
   console.log(window.location.href);
}

export default accessSpotify;