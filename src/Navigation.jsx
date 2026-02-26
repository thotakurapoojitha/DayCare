import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {

  const closeNavbar = () => {
    const navbar = document.getElementById("navbarNav");
    if (navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/" onClick={closeNavbar}>
          <img
            src="https://media.istockphoto.com/id/1267306341/vector/medical-care-concept-for-children.jpg?s=612x612&w=0&k=20&c=UoVVjK8Y9Trn9UU5rQVAUpHBjQxfeKo9hjiDrwR62UA="
            alt="Logo"
            width="75"
            height="50"
            className="me-2"
          />
          <h2><strong>DayCare</strong></h2>
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={closeNavbar}>
               <img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" alt="home" width="20" height="20" className="me-1" />
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/login" onClick={closeNavbar}>
                <img src="https://cdn-icons-png.flaticon.com/512/747/747376.png" alt="doctor login" width="20" height="20" className="me-1" />
                Doctor 
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/register" onClick={closeNavbar}>
                <img src="https://cdn-icons-png.flaticon.com/512/747/747376.png" alt="patient login" width="20" height="20" className="me-1" />
                Patients 
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/add-doctor" onClick={closeNavbar}>
               <img src="https://cdn-icons-png.flaticon.com/512/747/747376.png" alt="add doctor" width="20" height="20" className="me-1" />
                Add Doctor
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add-patient" onClick={closeNavbar}>
              <img src="https://cdn-icons-png.flaticon.com/512/747/747376.png" alt="add patient" width="20" height="20" className="me-1" />
                Add Patient
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}