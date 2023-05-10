import SearchInput from "./searchInput/SearchInput";
import styles from "./main.module.css";
import { Route, Routes } from "react-router-dom";
import Price from "./price/Price";

function Main() {
  return (
    <div className={styles.main__wrapper}>
      <Routes>
        <Route path="find-department" element={<SearchInput />} />
        <Route path="price" element={<Price />} />
      </Routes>
    </div>
  );
}

export default Main;
