const redirectUri = 'https://lyster.netlify.app';
const clientId = '18292b93831e49c6a52ad6b5291159c7';
const clientSecret = 'c838aae183154857929aa268de4da751';

function accessSpotify() {
   const params = new URLSearchParams({
      response_type: 'code',
      client_id: '18292b93831e49c6a52ad6b5291159c7',
      scope: 'user-read-private user-read-email',
      redirect_uri: 'https://lyster.netlify.app'
   });

   window.location.href = `https://accounts.spotify.com/authorize?${params.toString()}`;
}

  function getCode() {
    let code = null;
    const queryString = window.location.search;
    if (queryString.length > 0) {
      const urlParams = new URLSearchParams(queryString);
      code = urlParams.get('code');
    }
    return code;
  }

async function fetchAccessToken() {
   let body = `grant_type=autorization_code&code=${getCode()}&redirect_uri=${redirectUri}&client_id=${clientId}&client_secret=${clientSecret}`;
   try {
      const response = await fetch('https://accounts.spotify.com/api/token', {
         method: 'POST',
         body: body
      });
      if (response.ok) {
         const jsonResponse = await response.json();
         console.log(jsonResponse);
         return jsonResponse;
      }
      throw new Error('Request failed');
   } catch (error) {
      console.log(error);
   }
}

export {accessSpotify, fetchAccessToken};