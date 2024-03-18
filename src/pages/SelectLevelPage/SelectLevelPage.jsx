import { Link } from "react-router-dom";
import styles from "./SelectLevelPage.module.css";
import { useEasyMode } from "../../context/hooks/useEasyMode";

export function SelectLevelPage() {
  const { easyModeSelect } = useEasyMode();
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <div className="toggle-switch">
          <input type="checkbox" onClick={easyModeSelect} />
          <label>Легкий режим</label>
        </div>
        <h1 className={styles.title}>Выбери сложность</h1>
        <ul className={styles.levels}>
          <li className={styles.level}>
            <Link className={styles.levelLink} to="/game/3">
              1
            </Link>
          </li>
          <li className={styles.level}>
            <Link className={styles.levelLink} to="/game/6">
              2
            </Link>
          </li>
          <li className={styles.level}>
            <Link className={styles.levelLink} to="/game/9">
              3
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
