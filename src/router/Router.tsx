import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from '../pages/SignUp/SignUp';
import SignIn from '../pages/SignIn/SignIn';
import Dashboard from '../pages/Dashboard/Dashboard';
import Editor from '../pages/Editor/Editor';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/' element={<Dashboard />} />
        <Route path='/editor' element={<Editor />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
