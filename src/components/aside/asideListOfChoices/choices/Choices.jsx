import { Link } from "react-router-dom";

function Choices() {
  return (
    <>
      <Link to="/find-department">Find department</Link>
      <Link to="/price">Delivery Price</Link>
    </>
  );
}

export default Choices;
