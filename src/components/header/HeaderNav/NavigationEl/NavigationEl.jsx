import { Link } from "react-router-dom";

function NabigationEl() {
  return (
    <>
      <Link to="/">Find department</Link>
      <Link to="/delivery-price">Delivery Price</Link>
      <Link to="/tracking-delivery">Delivery Tracking</Link>
    </>
  );
}

export default NabigationEl;
