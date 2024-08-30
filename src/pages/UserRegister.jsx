import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import FormRegister from "../UI/Form/FormRegister";
import BtnContinue from "../UI/Buttons/BtnContinue";
import "./UserRegister.scss";
export default function UserRegister() {
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
    <div className="user-register">
      <div className="register-container">
        <FormRegister />
        <BtnContinue continueBtnText={"Create an account"} />
      </div>
    </div>
  );
}
