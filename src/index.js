import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './assets/sass/index.scss'
import Home from './pages/Home';
import Header from './components/Header/index.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
     <Header />
            <Routes>
                <Route element={<Home />} path="/" />

                <Route element={<Navigate to="/page-not-found" />} path="*" />
            </Routes>
        </BrowserRouter>
  </React.StrictMode>
);