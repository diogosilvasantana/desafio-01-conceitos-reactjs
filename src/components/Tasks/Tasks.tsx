import styles from "./Tasks.module.css";
import { v4 as uuidv4 } from 'uuid';

import { PlusCircle } from "phosphor-react";
import { EmptyTasks } from "../EmptyTasks/EmptyTasks";
import { TaskItem } from "../TaskItem/TaskItem";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { Task } from "../../interface/Task.interface";

export function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  
  const [newTask, setNewTask] = useState("");

  const [countTaskCompleted, setCountTaskCompleted] = useState(0);

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    setTasks([...tasks, { id: uuidv4(), name: newTask, completed: false }]);
    setNewTask("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTask(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  function countTotalTaskComplete(task: Task) {
    setCountTaskCompleted((state) => {
      return task.completed ? state + 1 : state - 1;
    })
  };

  function deleteTasks(taskToDelete: Task) {
    const taskWithoutDeleteOne = tasks.filter((task) => {
      return task !== taskToDelete;
    });

    setTasks(taskWithoutDeleteOne);

    setCountTaskCompleted((state) => {
      return state > 0 ? state - 1 : state;
    })
  }

  return (
    <article>
      <form onSubmit={handleCreateNewTask} className={styles.taskForm}>
        <input
          name="taskInput"
          type="text"
          value={newTask}
          placeholder="Adicione uma nova tarefa"
          onChange={handleNewTaskChange}
          onInvalid={handleNewTaskInvalid}
          required
        />

        <button type="submit">
          Criar
          <PlusCircle size={18} />
        </button>
      </form>

      <div className={styles.taskContent}>
        <header>
          <div className={styles.taskCreatedCount}>
            Tarefas Criadas
            <span>{tasks.length}</span>
          </div>

          <div className={styles.taskCompletedCount}>
            Concluídas
            <span>{countTaskCompleted}</span>
          </div>
        </header>

        <div className={styles.tasksItems}>
          {tasks.length > 0 ? (
            tasks.map((task) => {
              return (
                <TaskItem
                  key={task.name}
                  content={task}
                  onDeleteTask={deleteTasks}
                  onCountTaskCompleted={countTotalTaskComplete}
                />
              );
            })
          ) : (
            <EmptyTasks />
          )}
        </div>
      </div>
    </article>
  );
}
