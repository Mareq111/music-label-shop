/* import { useEffect } from "react";
import BtnContinue from "../UI/Buttons/BtnContinue";
import FormLogin from "../UI/Form/FormLogin";
import "./UserLogin.scss";
import { useLocation } from "react-router-dom";
export default function UserLogIn() {
  const location = useLocation();
  const margin = 32; // 32px = 2rem

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
    }
  }, [location]);

  return (
    <div className="login-container">
      <FormLogin />
      <BtnContinue continueBtnText={"Continue log in"} />
    </div>
  );
}
 */

import { useEffect } from "react";
import BtnContinue from "../UI/Buttons/BtnContinue";
import FormLogin from "../UI/Form/FormLogin";
import "./UserLogin.scss";
import { useLocation } from "react-router-dom";

export default function UserLogIn() {
  //componet always be on top page
  const location = useLocation();
  const margin = 32; // 32px = 2rem

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
      <FormLogin />
      <BtnContinue continueBtnText={"Continue log in"} />
    </div>
    </div>
  );
}
