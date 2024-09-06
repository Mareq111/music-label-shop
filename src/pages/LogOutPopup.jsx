/* import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice"; // Import the login action
import LogoStrimz from "../UI/Icons/Icon-Logo/LogoStrimz";
import "./WelcomePopup.scss";

export default function LogOutPopup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    if (countdown === 0) {
      clearInterval(timer);

      dispatch(login({}));

      navigate("/user-profile");
    }

    return () => clearInterval(timer);
  }, [countdown, dispatch, navigate]);

  return (
    <div className="background-off-popup">
      <div className="welcome-popup-container">
        <div className="welcome-popup">
          <h3 className="h-welcome-popup">Log out from Our Store!</h3>
          <p className="p-welcome-popup">
            Explore the latest products, special offers, and promotions tailored
            just for you. Happy shopping!
          </p>
          <div className="logo-welcome-popup">
            <LogoStrimz />
          </div>
          <div className="countdown-timer">
            <p>Redirecting in {countdown} seconds...</p>
          </div>
        </div>
      </div>
    </div>
  );
} */

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../store/authSlice"; // Import the logout action
import LogoStrimz from "../UI/Icons/Icon-Logo/LogoStrimz";
import "./WelcomePopup.scss";

export default function LogOutPopup() {
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Initialize useDispatch
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    if (countdown === 0) {
      clearInterval(timer);

      dispatch(logout());

     
      navigate("/login");
    }

    return () => clearInterval(timer);
  }, [countdown, dispatch, navigate]);

  return (
    <div className="background-off-popup">
      <div className="welcome-popup-container">
        <div className="welcome-popup">
          <h3 className="h-welcome-popup">Logging out from Our Store!</h3>
          <p className="p-welcome-popup">
            You are being logged out, please wait a moment...
          </p>
          <div className="logo-welcome-popup">
            <LogoStrimz />
          </div>
          <div className="countdown-timer">
            <p>Redirecting in {countdown} seconds...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
