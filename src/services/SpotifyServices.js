// src/spotifyAuth.js

const clientId = 'de06a9790ac24d0d9249041c5d8a26ba';
const clientSecret = '59aba8c2c64746efa32eb766549c5fdc';
const redirectUri = 'http://holalia.co.uk'; // Update this to your redirect URI
const scopes = 'user-read-playback-state user-read-currently-playing';

const authenticationEndpoint = 'https://accounts.spotify.com/authorize';
const tokenEndpoint = 'https://accounts.spotify.com/api/token';

// Redirect user to Spotify authorization page
export const getAuthUrl = () => {
  return `${authenticationEndpoint}?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes)}`;
};

// Exchange authorization code for access token
export const getAccessToken = async (code) => {
  const response = await fetch(tokenEndpoint, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri: redirectUri,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch access token');
  }

  const data = await response.json();
  return data.access_token;
};


const authEndpoint = 'https://api.spotify.com/v1/me/player/currently-playing';

const fetchCurrentSong = async (token) => {
  try {
    const response = await fetch(authEndpoint, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch current song');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching current song:', error);
    throw error;
  }
};

export { fetchCurrentSong };
