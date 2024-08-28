import { Link } from "react-router-dom";
import "./BadgeForgotPassword.scss";
export default function BadgeForgotPassword() {
  return (
    <div className="forgot-password-div">
      <Link to="/forgot-password">
        <p className="p-forgot-password">You forgot password?</p>
      </Link>
    </div>
  );
}
