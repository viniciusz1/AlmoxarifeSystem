import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './pages/Login';
import Register from './pages/Register';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import './main.scss'

import Sidebar from './components/Sidebar';
import TeacherHome from './pages/teacher/Teacher-home';
import AdminHome from './pages/administrator/Admin-home';
import AdminGerencProd from './pages/administrator/Admin-Gerenc-Prod';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin-prod-mngmt" element={<AdminGerencProd />} />
      <Route path="/admin/home" element={<AdminHome />} />
      <Route path="/teacher/home" element={<TeacherHome />} />
      <Route path="/sidebar" element={<Sidebar />} />
    </Routes>
  </BrowserRouter>
)
