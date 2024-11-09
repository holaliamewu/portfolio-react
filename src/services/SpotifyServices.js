const client_id = 'de06a9790ac24d0d9249041c5d8a26ba';
const client_secret = '59aba8c2c64746efa32eb766549c5fdc';

// Helper function to encode Base64 in browser
function encodeBase64(str) {
  return btoa(unescape(encodeURIComponent(str)));
}

async function getToken() {
  try {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      body: new URLSearchParams({
        'grant_type': 'client_credentials', // This won't work for fetching user-specific data
      }),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + encodeBase64(client_id + ':' + client_secret),
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching token: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error:', error);
  }
}

// Instead of Client Credentials, you need to manually generate a user access token
async function getCurrentSong(access_token) {
  try {
    const response = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
      method: 'GET',
      headers: { 'Authorization': 'Bearer ' + access_token },
    });

    if (!response.ok) {
      if (response.status === 204) {
        console.log('No song currently playing.');
      } else {
        throw new Error(`Error fetching current song: ${response.statusText}`);
      }
    }

    const songData = await response.json();
    console.log(songData);
    return songData;
  } catch (error) {
    console.error('Error:', error);
  }
}

// Replace this part with your manually generated access token
const userAccessToken = 'YOUR_USER_ACCESS_TOKEN';

getCurrentSong(userAccessToken).then(song => {
  console.log('Current song:', song);
});

export { getCurrentSong };
