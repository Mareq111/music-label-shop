import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import BtnContinue from "../UI/Buttons/BtnContinue";
import FormLogin from "../UI/Form/FormLogin";
import "./UserLogin.scss";

export default function UserLogIn() {
  const location = useLocation();
  const margin = 32; // 32px = 2rem
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - margin;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [location]);

  return (
    <div className="user-login">
      <div className="login-container">
        <FormLogin onValidationChange={setIsFormValid} />

        <Link
          to={"/welcome-page"}
          className={`btn-continue-div-wrapper ${
            !isFormValid ? "disabled" : ""
          }`}
        >
          <BtnContinue continueBtnText={"Continue log in"} />
        </Link>
      </div>
    </div>
  );
}
