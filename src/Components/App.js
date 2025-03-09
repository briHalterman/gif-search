import React, { useState } from 'react';
import '../App.css';
import axios from 'axios';

import SearchForm from './SearchForm';
import GifList from './GifList';

function App() {
  const [data, setData] = useState([]); // declare state

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
