import { Link } from "react-router-dom";

function NabigationEl() {
  return (
    <>
      <Link to="/Nova-Poshta/">Find department</Link>
      <Link to="/Nova-Poshta/delivery-price">Delivery Price</Link>
      <Link to="/Nova-Poshta/tracking-delivery">Delivery Tracking</Link>
    </>
  );
}

export default NabigationEl;
