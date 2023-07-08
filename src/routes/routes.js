import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import DragonForm from '../pages/DragonForm';
import DragonList from '../pages/DragonList';

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<DragonForm />} />
                <Route path="/list" element={<DragonList />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RoutesApp;
