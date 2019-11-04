import axios from 'axios';

export default class Service {
  constructor(url, config = {}, token = {}) {
    this.url = url;
    this.config = config;
    this.token = token;
  }

  get() {
    return axios.get(this.url, this.config)
      .then(response => response.data)
      .catch((error) => {
        return error;
      });
  }

  post() {
    return new Promise((resolve, reject) => {
      axios.post(this.url, this.config)
        .then(response => resolve(response.data))
        .catch(error => {
          handleResponseError(error);
          reject(error);
        });
    });
  }
}
