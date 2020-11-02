import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'http://localhost:5001/online-product-9ea65/us-central1/api'
    // "http://localhost:5001/online-product-9ea65/us-central1/api",
    // https://us-central1-challenge-4b2b2.cloudfunctions.net/api
});

export default instance;


