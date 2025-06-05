import React from "react";
import "../styles/profile.css";
import { FaCamera } from "react-icons/fa";
import profileIcon from "../assets/avatar.jpg"; // default icon/image

export default function Profile() {
  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-avatar-section">
          <div className="avatar-circle">
            <img src={profileIcon} alt="Profile" className="avatar-icon" />
            <div className="avatar-edit-icon">
              <FaCamera />
            </div>
          </div>
        </div>

        <div className="profile-form-section">
          <h2>ACCOUNT</h2>
          <form className="profile-form">
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" placeholder="First Name" />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" placeholder="Last Name" />
              </div>
            </div>
            <div className="form-group">
              <label>E-mail Address</label>
              <input type="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <label>Alternatif E-mail Address</label>
              <input type="email" placeholder="Alternatif Email" />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="text" placeholder="Phone Number" />
            </div>
          </form>
        </div>
      </div>

      <footer className="profile-footer">
        <p>Contact Us:</p>
        <p>klabang2025@gmail.com</p>
      </footer>
    </div>
  );
}
