import Choices from "./choices/Choices";
import styles from "./listOfChoices.module.css";

function ListOfChoices() {
  return (
    <ul className={styles.choices}>
      <Choices />
    </ul>
  );
}

export default ListOfChoices;
