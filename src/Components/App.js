import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';

import SearchForm from './SearchForm';
import GifList from './GifList';

const apiKey = process.env.REACT_APP_API_KEY;
// console.log(apiKey);

function App() {
  const [data, setData] = useState([]); // declare state

  useEffect(() => {
    axios(
      `http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=REACT_${apiKey}`
        .then((response) => setData(response.data.data))
        .catch((error) =>
          console.log('Error fetching and parsing data', error)
        )
    );
  }, []);

  return (
    <>
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">GifSearch</h1>
          <SearchForm />
        </div>
      </div>
      <div className="main-content">
        {/* pass down the data state */}
        <GifList data={data} />
      </div>
    </>
  );
}

export default App;
