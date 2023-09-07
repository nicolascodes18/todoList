import { Trash } from '@phosphor-icons/react';
import { ITasks } from '../Tasks';
import styles from './Task.module.css';

interface ITask {
  task: ITasks;
}

function Task({ task }: ITask) {
  return (
    <div className={styles.task}>
      <button className={styles.taskCheckButton}>
        <div />
      </button>
      <p>{task.title}</p>
      <button className={styles.taskDeleteButton}>
        <Trash size={20} />
      </button>
    </div>
  );
}

export default Task;
