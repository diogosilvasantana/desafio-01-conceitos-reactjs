import styles from './Tasks.module.css'

import { PlusCircle } from 'phosphor-react';

export function Tasks() {
  return (
    <article>
      <form className={styles.taskForm}>
        <input 
          type="text"
          placeholder="Adicione uma nova tarefa"
        />

        <button type='submit'>
          Criar
          <PlusCircle size={18}/>
        </button>
      </form>
    </article>
  );
}
