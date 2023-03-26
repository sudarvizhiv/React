import React, { useState } from "react";
import "./Screen2.css";

function Screen2({ setScreen }) {
  const [otpValue, setOtpValue] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setOtpValue(e.target.value);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otpValue !== "9999") {
      setError("Incorrect OTP, please try again");
    } else {
      // Move to the next page
      setScreen(3);
    }
  };

  return (
    <div className="screen2-container">
      <div className="screen2-form-box">
        <form onSubmit={handleSubmit}>
          <p className="screen2-header">Enter OTP</p>
          <p className="screen2-otp-header">
            We have sent a one time password (OTP) to ****
          </p>
          <input
            type="text"
            value={otpValue}
            onChange={handleInputChange}
            maxLength={4}
            placeholder="OTP"
          />

          {error && <div style={{ color: "red" }}>{error}</div>}
          <button type="submit">Continue</button>
        </form>
      </div>
    </div>
  );
}

export default Screen2;