import styles from "./TaskItem.module.css";
import { Trash } from "phosphor-react";
import { useState } from "react";

import { TaskProps } from "../../interface/Task.interface";

export function TaskItem({ content, onDeleteTask, onCountTaskCompleted }: TaskProps) {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckInput() {
    content.completed = !content.completed;
    setIsChecked((state) => !state);
    onCountTaskCompleted(content);
  }

  function handleDeleteTask() {
    onDeleteTask(content);
  }

  return (
    <div className={styles.task}>
      <div className={styles.taskContainer}>
        <input
          type="checkbox"
          id={content.id}
          defaultChecked={content.completed}
          onClick={handleCheckInput}
        />
        <label htmlFor={content.id} />

        <p className={isChecked ? styles.taskIsCompleted : ""}>
          {content.name}
        </p>
      </div>

      <button onMouseDown={handleDeleteTask} title="Deletar tarefa">
        <Trash />
      </button>
    </div>
  );
}
