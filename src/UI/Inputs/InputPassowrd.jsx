import "./InputPassword.scss";
export default function InputPassowrd({ isValid, password, handleChange }) {
  return (
    <div className="input-password-container">
      <label title="Password required" htmlFor="input-fullname">
        Password
      </label>
      <input
        required
        type="text"
        id="input-fullname"
        name="full-name"
        autoComplete="on"
        aria-label="full name"
        placeholder="********"
        value={password}
        onChange={handleChange}
        className={!isValid ? "invalid-password" : ""}
        aria-describedby={!isValid ? "invalid-message-password" : ""}
      />
      {/* error text */}
      {!isValid && (
        <div id="invalid-message-password" className="invalid-message-password">
          Please enter a valid password.
        </div>
      )}
    </div>
  );
}
