import { LogIn } from "./components/LogIn";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  return (
      <Router>
        <Routes>
          <Route path='/' element={<LogIn/>}/>
        </Routes>
      </Router>
  );
}

export default App;