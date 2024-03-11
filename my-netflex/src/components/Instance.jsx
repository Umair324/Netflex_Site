// api.js

import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.example.com', // Replace this with your API base URL
  timeout: 5000, // Set a timeout for requests (in milliseconds)
  headers: {
    'Content-Type': 'application/json',
    // Add any other headers you need here
  },
});

export default instance;
