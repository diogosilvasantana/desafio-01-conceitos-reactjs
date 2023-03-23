import styles from "./EmptyTasks.module.css";

import taskIcon from "../assets/task-icon.svg";

export function EmptyTasks() {
  return (
    <div className={styles.emptyContent}>
      <img src={taskIcon} />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  );
}
