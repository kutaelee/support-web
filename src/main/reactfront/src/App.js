// src/main/frontend/src/App.js

import React from 'react';
import {BrowserRouter, Routes, Route ,Link} from 'react-router-dom';
import Home from 'pages/home';
import MyPage from 'pages/mypage';

function App() {

    return (

        <BrowserRouter>
            <Routes>
                <Route path='/' exact="exact" element={<Home />}/>
                <Route path='/home' element={<Home />}/>
                <Route path='/mypage' element={<MyPage />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;