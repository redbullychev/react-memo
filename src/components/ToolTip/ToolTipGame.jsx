import { useRef, useState } from "react";
import styles from "./ToolTip.module.css";
import unsuper1 from "./unsuper1.svg";
import super1 from "./super1.svg";

export default function ToolTipGame(isAchievment) {
  const [showToolTip, setShowToolTip] = useState(false);
  const refSetTimeout = useRef();

  const onMouseEnterHandler = () => {
    refSetTimeout.current = setTimeout(() => {
      setShowToolTip(true);
    }, 750);
    console.log(isAchievment);
  };

  const onMouseLeaveHandler = () => {
    clearTimeout(refSetTimeout.current);
    setShowToolTip(false);
  };

  return (
    <>
      {isAchievment ? (
        <>
          <img onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler} src={super1} alt="" />
          {showToolTip && <div className={styles.toolTip}> Игра пройдена в сложном режиме </div>}
        </>
      ) : (
        <>
          <img onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler} src={unsuper1} alt="" />
          {showToolTip && <div className={styles.toolTip}> Игра пройдена в сложном режиме </div>}
        </>
      )}
    </>
  );
}
