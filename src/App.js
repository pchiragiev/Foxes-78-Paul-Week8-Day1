import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Shop from './views/Shop';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

const App = () => {
  const [students, setStudents] = useState(['a', 'b', 'c']);

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<Home students={students} />} />
        <Route path='/shop' element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;
