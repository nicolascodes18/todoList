import styles from './App.module.css';
import Header from './components/Header';
import TaskBar from './components/Taskbar';
import './global.css';

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <TaskBar />
      </div>
    </div>
  );
}

export default App;
