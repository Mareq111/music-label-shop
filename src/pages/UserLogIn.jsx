import BtnContinue from "../UI/Buttons/BtnContinue";
import FormLogin from "../UI/Form/FormLogin";
import "./UserLogin.scss";
export default function UserLogIn() {
  return (
    <div className="login-container">
      <FormLogin />
      <BtnContinue continueBtnText={"Continue log in"} />
    </div>
  );
}
