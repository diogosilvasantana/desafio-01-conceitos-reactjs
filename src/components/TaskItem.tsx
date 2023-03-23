import styles from "./TaskItem.module.css";
import { Trash } from "phosphor-react";
import { useState } from "react";

interface Task {
  id: string;
  name: string;
  completed: boolean;
}
interface TaskProps {
  content: Task;
  onDeleteTask: (task: Task) => void;
}

export function TaskItem({ content, onDeleteTask }: TaskProps) {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckInput() {
    setIsChecked((state) => !state);
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
