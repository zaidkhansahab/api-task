
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowList from './component/ShowList';
import ShowSummary from './component/ShowSummary';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<ShowList />} />
        <Route path="/summary/:id" element={<ShowSummary />} />
      </Routes>
    </Router>
  );
};

export default App;






