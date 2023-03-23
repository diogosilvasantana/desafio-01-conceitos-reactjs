import styles from "./Tasks.module.css";
import { v4 as uuidv4 } from 'uuid';

import { PlusCircle } from "phosphor-react";
import { EmptyTasks } from "./EmptyTasks";
import { TaskItem } from "./TaskItem";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

export function Tasks() {
  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      name: "Terminar o desafio 01 de Conceitos de ReactJS do curso de Ignite da Rocketseat",
      completed: true,
    },
  ]);

  const [newTask, setNewTask] = useState("");

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

  function deleteTasks(taskToDelete: any) {
    const taskWithoutDeleteOne = tasks.filter((task) => {
      return task !== taskToDelete;
    });

    setTasks(taskWithoutDeleteOne);
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
            <span>0</span>
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
