import { useDispatch, useSelector } from 'react-redux';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import { toggleDarkMode } from './reducers/taskSlice';
import './App.css'

function App() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.tasks.darkMode);

  return (
    <div className={darkMode ? 'app dark-mode' : 'app'}>
      <div className={darkMode ? 'app-sub dark-mode' : 'app-sub'}>
        <div className={darkMode ? 'header dark-mode' : 'header'}>
          <h1>TO DO LIST</h1>
          <button onClick={() => dispatch(toggleDarkMode())}>
            {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>
        </div>
        <AddTask />
        <TaskList />
      </div>
    </div>
  );
}

export default App;