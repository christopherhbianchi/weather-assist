import decode from 'jwt-decode';
// import { browserHistory } from 'react-router-dom'; ******************************************************
import auth0 from 'auth0-js';
const ID_TOKEN_KEY = 'id_token'; //***
const ACCESS_TOKEN_KEY = 'access_token'; //***

const CLIENT_ID = '61Y6FwxhypiSI65QnP4bkzGYmnAnWgzi';
const CLIENT_DOMAIN = 'AUTH0_DOMAIN';
const REDIRECT = 'http://localhost:3000/callback';
const SCOPE = 'YOUR_SCOPE';
const AUDIENCE = 'AUDIENCE_ATTRIBUTE';

const auth = new auth0.WebAuth({
  clientID: CLIENT_ID,
  domain: CLIENT_DOMAIN
});

export const login = () => {
  auth.authorize({
    responseType: 'token id_token',
    redirectUri: REDIRECT,
    audience: AUDIENCE,
    scope: SCOPE
  });
}//closes login

export const logout = () => {
  clearIdToken();
  clearAccessToken();
  // browserHistory.push('/'); ******************************************************
}//logout

export const requireAuth = (nextState, replace) => {
  if(!isLoggedIn()){
    replace({pathname: '/'});
  }
}//requireAuth


export const getIdToken = () => localStorage.getItem(ID_TOKEN_KEY);

export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN_KEY);

const clearIdToken = () => localStorage.removeItem(ID_TOKEN_KEY);

const clearAccessToken = () => localStorage.removeItem(ACCESS_TOKEN_KEY);

//Helper to allow us to extract the access_token and id_token
const getParameterByName = name => {
  let match = RegExp('[#&]' + name + '=([^&]*)').exec(window.location.hash);
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}


//Get and store access_token in local storage
export const setAccessToken = () => {
  let accessToken = getParameterByName('access_token');
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
}

//Get and store id_token in local storage
export const setIdToken = () => {
  let idToken = getParameterByName('id_token');
  localStorage.setItem(ID_TOKEN_KEY, idToken);
}

export const isLoggedIn = () => {
  const idToken = getIdToken();
  return !!idToken && !isTokenExpired(idToken);
}

const getTokenExpirationDate = (encodedToken) => {
  const token = decode(encodedToken);
  if(!token.exp) return null;

  const date = new Date(0);
  date.setUTCSeconds(token.exp);

  return date;

}//getTokenExpirationDate


const isTokenExpired = (token) => {
  const expirationDate = getTokenExpirationDate(token);
  return expirationDate < new Date();
}
