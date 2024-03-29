import { useNavigate } from "react-router-dom";
import "./HomePage.scss";
export default function HomePage() {
  const navigate = useNavigate();

  // handler functions to products details and products pages
  function navToProductsDetailsHandler() {
    navigate("products/:productId");
  }
  function navToProducts() {
    navigate("albums");
  }
  return (
    <div className="home-content">
      <h1>My home page</h1>

      <button onClick={navToProducts}>Albums</button>
      <button onClick={navToProductsDetailsHandler}>Product Details</button>
    </div>
  );
}
