import { useEffect, useState } from 'react';
import reactLogo from '@/assets/react.svg';
import './App.css';
import { ToggleTheme } from './theme/components/ToggleTheme/ToggleTheme';
import { ThemeContext } from './theme/context/themeContext';
import { useSetInitialTheme } from './theme/hooks/useSetInitialTheme';

export function App() {
  const userTheme = useSetInitialTheme();

  return (
      <ThemeContext.Provider value={{ userTheme }}>
          <AppExample />
      </ThemeContext.Provider>
  )
}

export function AppExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    /* chrome.storage?.sync?.get('color', (ev) => {
      console.log(ev);
    }); */
  }, []);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <br />
        <ToggleTheme />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
