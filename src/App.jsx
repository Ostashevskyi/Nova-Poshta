import styles from "./App.module.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
