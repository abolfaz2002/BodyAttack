import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Athlete from './Pages/Athlete';
import Coach from './Pages/Coach';
import Navigation from './Component/Navigation'
import Coaches from './Pages/Coaches';
import Learning from './Pages/Learning';
import NewAthlete from './Pages/NewAthlete/NewAthlete';
import Layout from './Component/Layout';
import Profile from './Pages/Profile/Profile';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='coachs/:id' element={<Coach />} />
          <Route path='coachs' element={<Coaches />} />
          <Route path='athlete/:id' element={<Athlete />} />
          <Route path='newathlete' element={<NewAthlete />} />
          <Route path='learning' element={<Learning />} />
          <Route path="login" element={<Login />} />
          <Route path='profile' element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
