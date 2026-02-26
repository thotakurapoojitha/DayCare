import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home.jsx'
import Login from './Doctor.jsx'
import Register from './Patient.jsx'
import Navigation from './Navigation.jsx'
import AddDoctor from './AddDoctor.jsx'
import AddPatient from './AddPatient.jsx'
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add-doctor" element={<AddDoctor />} />
          <Route path="/add-patient" element={<AddPatient />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
