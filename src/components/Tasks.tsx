import styles from "./Tasks.module.css";

import { PlusCircle } from "phosphor-react";
import { EmptyTasks } from "./EmptyTasks";
import { TaskItem } from "./TaskItem";

export function Tasks() {
  return (
    <article>
      <form className={styles.taskForm}>
        <input type="text" placeholder="Adicione uma nova tarefa" />

        <button type="submit">
          Criar
          <PlusCircle size={18} />
        </button>
      </form>

      <div className={styles.taskContent}>
        <header>
          <div className={styles.taskCreatedCount}>
            Tarefas Criadas
            <span>0</span>
          </div>

          <div className={styles.taskCompletedCount}>
            Concluidas
            <span>0</span>
          </div>
        </header>

        <TaskItem />
        <EmptyTasks />
      </div>
    </article>
  );
}
