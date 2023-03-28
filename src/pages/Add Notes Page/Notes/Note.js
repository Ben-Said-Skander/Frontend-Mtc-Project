
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

export default function Note(props) {
  const [a, setA] = useState();
  useEffect(() => {
    setA(1);
  }, []);
  const parite = () => {
    console.log(props.value.id);

    if (props.value.id % 3 == 2) {
      return ["#11B99E"]; //green
    } else if (props.value.id % 3 == 1) {
      return ["#FFC406"]; //yellow
    } else {
      return ["#B4F6C1"]; //pistache
    }
  };
  return (
    <div>
      <div className={styles.note} style={{ background: parite()[0] }}>
        {props.value.noteText}
      </div>
    </div>
  );
}
