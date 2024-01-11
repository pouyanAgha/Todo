import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Albums = lazy(() => import('./components/Albums'));
const Photos = lazy(() => import('./components/Photos'));
const Todos = lazy(() => import('./components/Todos'));
const Users = lazy(() => import('./components/Users'));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/Albums/:id" element={<Albums />} />
        <Route path="/Todos/:id" element={<Todos />} />
        <Route path="/Photos/:id" element={<Photos />} />
      </Routes>
    </Suspense>
  );
};

export default App;
