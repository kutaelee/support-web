// src/main/frontend/src/App.js

import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from 'pages/common/home';
import MyPage from 'pages/common/mypage';
import Header from 'pages/common/header';
import Footer from 'pages/common/footer';
import Join from 'pages/common/join';
import Login from 'pages/common/login';
import InspectionPlan from 'pages/inspection/plan';
import InspectionManagement from 'pages/inspection/management';
import SupportReport from 'pages/support/report';
import SupportHistory from 'pages/support/history';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/join' element={<Join />} />
        <Route path='/login' element={<Login />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/inspection/plan' element={<InspectionPlan/>} />
        <Route path='/inspection/management' element={<InspectionManagement />} />
        <Route path='/support/report' element={<SupportReport />} />
        <Route path='/support/history' element={<SupportHistory />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;