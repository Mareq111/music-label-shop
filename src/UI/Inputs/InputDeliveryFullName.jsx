import './InputDeliveryFullName.scss'
export default function InputDeliveryFullName() {
  return (
    <div className="input-fullname-container">
    <label htmlFor="fullname">Full Name*</label>
    <input className='input-fullname' type="text" id="fullname" name="fullname" autoComplete="on" />
  </div>
  );
}
