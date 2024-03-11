// ExampleComponent.js

import React, { useEffect } from 'react';
import axios from './path-to-your-api-file/api'; // Adjust the path accordingly

const ExampleComponent = () => {
  useEffect(() => {
    // Example GET request
    axios.get('/example-endpoint')
      .then(response => {
        console.log('Data:', response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });

    // Example POST request
    axios.post('/another-endpoint', { data: 'example' })
      .then(response => {
        console.log('Data:', response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      {/* Your component content */}
    </div>
  );
};

export default ExampleComponent;
