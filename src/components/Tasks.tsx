import styles from "./Tasks.module.css";

import { PlusCircle } from "phosphor-react";
import { EmptyTasks } from "./EmptyTasks";
import { TaskItem } from "./TaskItem";
import { useState } from "react";

export function Tasks() {
  const [tasks, setTasks] = useState([
    { 
      name: 'Terminar o desafio 01 de Conceitos de ReactJS do curso de Ignite da Rocketseat', 
      completed: false
    }
  ])

  function deleteTasks() {}

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
            Concluídas
            <span>0</span>
          </div>
        </header>

        <div className={styles.tasksItems}>
          {tasks.map(task => {
            return (
              <TaskItem 
                key={task.name}
                completed={task.completed}
                onDeleteTask={deleteTask}
              />
            )
          })}
        </div>


        <EmptyTasks />
      </div>
    </article>
  );
}
