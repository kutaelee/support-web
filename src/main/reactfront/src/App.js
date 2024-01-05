// src/main/frontend/src/App.js

import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from 'pages/home';
import MyPage from 'pages/mypage';
import Header from 'pages/header';
import Footer from 'pages/footer';
import Join from 'pages/join';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/join' element={<Join />} />
        <Route path='/mypage' element={<MyPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;