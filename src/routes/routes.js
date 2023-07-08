import React from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';

import DragonForm from '../pages/DragonForm';
import DragonList from '../pages/DragonList';
import Arena from '../pages/Arena';

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<DragonForm />} />
                <Route path="/list" element={<DragonList />} />
                <Route path="/arena" element={<Arena />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RoutesApp;
