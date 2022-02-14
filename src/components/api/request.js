import axios from 'axios'

const client = axios.create({
  baseURL: "http://localhost:8000/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const request = (options) => {
  const onSuccess = (response) => {
    return response.data;
  };

  const onError = (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        console.log(error);
      }
      if (error.response.status === 403) {
        console.log(error);
      }
    } else if (error.request) {
    } else {
      console.log(error);
    }

    return Promise.reject(error.response || error.message);
  };

  return client(options).then(onSuccess).catch(onError);
};

export default request;