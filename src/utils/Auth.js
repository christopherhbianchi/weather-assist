import auth0 from 'auth0-js';


const CLIENT_ID = '61Y6FwxhypiSI65QnP4bkzGYmnAnWgzi';
const CLIENT_DOMAIN = 'weather-assist.auth0.com';
const REDIRECT = 'http://localhost:3000/home';
const SCOPE = 'read:allweather';


const auth = new auth0.WebAuth({
  clientID: CLIENT_ID,
  domain: CLIENT_DOMAIN
});

export const login = () => {
  const hola = auth.authorize({
    responseType: 'token',
    redirectUri: REDIRECT,
    scope: SCOPE
  });
  return hola
}//closes login

export const logout = () => {
  auth.logout({
    returnTo:'http://localhost:3000/login',
    clientID: CLIENT_ID,
    federated: 'https://weather-assist.auth0.com/v2/logout?federated'
  });
}//closes logout


//
