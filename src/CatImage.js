import React, { useState } from 'react';
import request from 'browser-request';

function CatImage() {
  const [imageUrl, setImageUrl] = useState(null);

  const fetchCatImage = () => {
    const apikey = 'e9df62b8-28ec-46e8-8db4-401d596f1231';
    const url = 'https://api.thecatapi.com/v1/images/search';
    const headers = {
      'x-api-key': apikey
    };
    request({ url, headers, json: true }, (error, response, body) => {
      if (error) {
        console.error(error);
      } else if (!response.statusCode === 200) {
        console.error(`HTTP error! Status: ${response.statusCode}`);
      } else {
        setImageUrl(body[0].url);
      }
    });
  };
  

  return (
    <div>
      {imageUrl ? (
        <img src={imageUrl} alt="Random cat" />
      ) : (
        <p>No cat image yet</p>
      )}
      <button onClick={fetchCatImage}>Get Random Cat Image</button>
    </div>
  );
}

export default CatImage;
