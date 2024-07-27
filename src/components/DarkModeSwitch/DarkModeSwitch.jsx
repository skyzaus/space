import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
// import { ThemeContext } from '../context/ThemeContext';

const DarkModeSwitch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    
    <button onClick={toggleTheme}>
      Switch to  {theme === "light" ? "🌙 Dark" : "☀️ Light"} Mode
    </button>
  );
};

export default DarkModeSwitch;