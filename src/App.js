import React from 'react';
import { Routes, Route } from 'react-router-dom';
import List from './components/List/List';
import Details from './components/Details/Details';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="details" element={<Details />} />
      </Routes>
    </div>
  );
};

export default App;
