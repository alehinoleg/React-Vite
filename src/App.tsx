import styles from './App.module.scss';
import react from './assets/react.svg';
import vite from './assets/vite.svg';

function App() {
  return (
    <div>
    <h1 className={styles.title}>Мой проект на React + Vite</h1>
    <img src={react} alt="React" />
    +
    <img src={vite} alt='vite'/>
    </div>
  );
}

export default App;