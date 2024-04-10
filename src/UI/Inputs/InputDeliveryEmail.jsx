import "./InputDeliveryEmail.scss";
export default function InputDeliveryEmail() {
  return (
    <div className="input-email-container">
      <label htmlFor="input-email">Email address </label>
      <input
        type="email"
        id="input-email"
        name="email"
        aria-label="email"
        autoComplete="email"
        placeholder="example@example.com"
        aria-describedby="emailHelp"
        required
      />
      {/*  <div id="div-emailHelp">
        <p id="emailHelp">
          Please enter your email in the format: name@example.com
        </p>
      </div> */}
    </div>
  );
}
