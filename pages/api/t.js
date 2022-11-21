/* eslint-disable prettier/prettier */
import querystring from 'querystring';

const client_id = "d4c7ac39674d4e4887e542beae00fffb";
const client_secret = "00673c0ca040408195345aad62954cea";
const refresh_token ="AQAEfX0RU7HKrbWf8iQiDmcHBrnGb7obrzslYnklZAJMj1ikP4mZaI2IwqDkblTKQ0EWWLFBDgXgRzCUPrL4ZVaGEtwTluhXd0zKKr4uop8pJY1BPC-yV8_96avkHEdZbcA"

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;


const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  });

  return response.json();
};


export const getTopTracks = async () => {
  const { access_token } = await getAccessToken();
  return fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export default async (_, res) => {
  const response = await getTopTracks();
  const data = await response.json();
  
    res.status(200).json(data);

  
}


