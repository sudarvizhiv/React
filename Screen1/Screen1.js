import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./Screen1.css";

function Screen1({ setScreen, setUserData }) {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !/^\d{10}$/.test(inputValue) &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue)
    ) {
      setError("Invalid input format");
    } else {
      // Set the user data
      setUserData(inputValue);
      // Move to the next page
      setScreen(2);
    }
  };

  return (
    <div className="screen1-container">
      <div className="screen1-form-box">
        <form onSubmit={handleSubmit}>
          <div className="screen1-header">
            <h4>Get started</h4>
          </div>
          <input
            type="text"
            value={inputValue}
            placeholder="Mobile / Email"
            onChange={handleInputChange}
            maxLength={50}
          />
          {error && <div style={{ color: "red" }}>{error}</div>}
          <button className="continue-button" type="submit">
            Continue
          </button>
          <p style={{ "font-weight": "20px", marginBottom: "10px" }}>
            or continue with
          </p>
          <div className="screen1-buttons">
            <button className="whatsapp-button">
              <svg
                className="whatsapp-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="green"
                  d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                />
              </svg>
              Whatsapp
            </button>
            <button className="google-button">
              <svg
                className="google-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512"
              >
                <path
                  fill="blue"
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                />
              </svg>
              Google
            </button>
          </div>
          <p className="terms-policies">
            By continuing you agree to our <span>terms</span> and{" "}
            <span>policies</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Screen1;