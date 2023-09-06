import styles from './Header.module.css';

import rocketIcon from '@/assets/rocket.svg';

function Header() {
  return (
    <header className={styles.header}>
      <img src={rocketIcon} />
      <div className={styles.title}>
        <h1>to</h1>
        <h1>do</h1>
      </div>
    </header>
  );
}

export default Header;
