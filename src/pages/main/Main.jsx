import SearchInput from "./searchInput/SearchInput";
import styles from "./main.module.css";
import { Route, Routes } from "react-router-dom";
import Price from "./price/Price";
import Tracking from "./tracking/Tracking";

function Main() {
  return (
    <Routes>
      <Route path="Nova-Poshta/" element={<SearchInput />} />
      <Route path="/Nova-Poshta/delivery-price" element={<Price />} />
      <Route
        path="/Nova-Poshta/tracking-delivery"
        element={<Tracking />}
      ></Route>
    </Routes>
  );
}

export default Main;
