import Task from '../Task';
import styles from './Tasks.module.css';

export interface ITasks {
  id: string;
  title: string;
  isComplete: boolean;
}

interface TasksProps {
  tasks: ITasks[];
}

function Tasks({ tasks }: TasksProps) {
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter(task => task.isComplete).length;

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>{tasks.length}</span>
        </div>
        <div>
          <p className={styles.textCompletedPurple}>Concluídas</p>
          <span>
            {completedTasks} de {tasksQuantity}
          </span>
        </div>
      </header>

      <div className={styles.taskList}>
        {tasks.map(task => {
          return <Task key={task.id} task={task} />;
        })}
      </div>
    </section>
  );
}

export default Tasks;
