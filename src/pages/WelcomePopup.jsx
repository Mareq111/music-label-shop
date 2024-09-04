import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoStrimz from "../UI/Icons/Icon-Logo/LogoStrimz";
import "./WelcomePopup.scss";

export default function WelcomePopup() {
  const navigate = useNavigate();
  //timer starts with 5s
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    if (countdown === 0) {
      clearInterval(timer);
      navigate("/user-profile-after");
    }

    return () => clearInterval(timer);
  }, [countdown, navigate]);
  return (
    <div className="background-off-popup">
      <div className="welcome-popup-container">
        <div className="welcome-popup">
          <h3 className="h-welcome-popup">Welcome to Our Store!</h3>
          <p className="p-welcome-popup">
            Explore the latest products, special offers, and promotions tailored
            just for you. Happy shopping!
          </p>
          <div className="logo-welcome-popup">
            <LogoStrimz />
          </div>
          <div className="countdown-timer">
            <p>Redirecting in {countdown} seconds...</p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
