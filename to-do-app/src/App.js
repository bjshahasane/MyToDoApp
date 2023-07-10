import './App.css';
import AppHeader from './components/AppHeader';
import AppContent from './components/AppContent';
import styles from '../src/styles/modules/app.module.scss';

function App() {
  return (
    <div className="App">
      <h1 className={styles.title}>My ToDo's</h1>
      <AppHeader/>
      <AppContent/>
    </div>
  );
}

export default App;
