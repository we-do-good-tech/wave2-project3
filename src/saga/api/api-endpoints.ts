const [DEVELOPMENT_BASE_URL, PRODUCTION_BASE_URL] = ['http://localhost:8080/', 'https://production.base.url/'];
const baseURL = window.location.hostname === 'localhost' ? DEVELOPMENT_BASE_URL : PRODUCTION_BASE_URL;

export const apiEndpoints = {
  REGISTER_URL: `${baseURL}auth/register`,
  LOGIN_URL: `${baseURL}auth/login`,
  LOGOUT_URL: `${baseURL}auth/logout`,
  REFRESH_URL: `${baseURL}auth/refresh`,
  AUTH_URL: `${baseURL}auth/`,
  CONTENT_URL: `${baseURL}content`,
};
