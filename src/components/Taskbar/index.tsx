import { PlusCircle } from '@phosphor-icons/react';
import styles from './Taskbar.module.css';

function TaskBar() {
  return (
    <div className={styles.taskBar}>
      <input className={styles.inputBar} placeholder="Adicione uma nova tarefa" />
      <button type="submit" onClick={() => console.log('teste')}>
        Criar
        <PlusCircle size={18} weight="bold" />
      </button>
    </div>
  );
}

export default TaskBar;
