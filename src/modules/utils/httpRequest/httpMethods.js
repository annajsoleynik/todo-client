import axios from 'axios';

function getHeaders(type) {
  return {
    'Content-Type': type
  };
}

const server =
  process.env.REACT_APP_ENV === 'production'
    ? process.env.REACT_APP_HOST_API_SERVER_PROD
    : process.env.REACT_APP_HOST_API_SERVER_DEV;

function httpMethod(method, url, data, type = 'application/json') {
  return axios({
    method,
    url: server + url,
    data,
    headers: getHeaders(type)
  })
    .then(res => res)
    .catch(error => {
      throw new Error('ERROR http', error);
    });
}

export function get(url) {
  return httpMethod('get', url);
}

export function post(url, data, type) {
  return httpMethod('post', url, data, type);
}

export function patch(url, data, type) {
  return httpMethod('patch', url, data, type);
}

export function del(url, data) {
  return httpMethod('delete', url, data);
}
