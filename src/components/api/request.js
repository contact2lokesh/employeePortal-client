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
        // logout()
        console.log(error);
      }
      if (error.response.status === 403) {
        // history.push('/app/no-permission')
        console.log(error);
      }
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the
      // browser and an instance of
      // http.ClientRequest in node.js
      // history.push('/app/error/500')
      console.log(error);
    } else {
      // Something else happened while setting up the request
      // triggered the error
      // history.push('/app/error/500')
      console.log(error);
    }

    return Promise.reject(error.response || error.message);
  };

  return client(options).then(onSuccess).catch(onError);
};

export default request;