import { Route, Routes } from "react-router-dom";

import Price from "./price/Price";

import SearchInput from "./searchInput/SearchInput";

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
