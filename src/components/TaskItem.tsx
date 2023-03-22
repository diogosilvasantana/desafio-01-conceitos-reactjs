import styles from "./TaskItem.module.css";
import { Trash } from "phosphor-react";

export function TaskItem() {
  return (
    <div className={styles.task}>
      
      <input type="checkbox" id="checkboxId" />
      <label htmlFor="checkboxId" />

      <p>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>

      <button>
        <Trash />
      </button>
    </div>
  );
}
