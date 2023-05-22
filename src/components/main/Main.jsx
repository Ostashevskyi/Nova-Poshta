import SearchInput from "./searchInput/SearchInput";
import styles from "./main.module.css";
import { Route, Routes } from "react-router-dom";
import Price from "./price/Price";
import Tracking from "./tracking/Tracking";

function Main() {
  return (
    <Routes>
      <Route path="/" element={<SearchInput />} />
      <Route path="delivery-price" element={<Price />} />
      <Route path="tracking-delivery" element={<Tracking />}></Route>
    </Routes>
  );
}

export default Main;
