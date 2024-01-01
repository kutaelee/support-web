// src/main/frontend/src/App.js

import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './home';
import MyPage from './mypage';

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