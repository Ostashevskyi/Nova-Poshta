import { Routes, Route } from "react-router-dom";
import Header from "src/components/Header/Header";

import SearchPage from "./pages/Home/SearchPage";
import PricePage from "./pages/PricePage/PricePage";
import TrackingPage from "./pages/TrackingPage/TrackingPage";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="Nova-Poshta/" element={<SearchPage />} />
        <Route path="/Nova-Poshta/delivery-price" element={<PricePage />} />
        <Route
          path="/Nova-Poshta/tracking-delivery"
          element={<TrackingPage />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
