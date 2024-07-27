import { NavLink } from "react-router-dom";
import styles from "./NavigationBar.module.css";

function NavigationBar () {
    
  return (
    <>
    <div className={styles.navigation}>
      <p> Navbar here ===</p>
     
      <NavLink to="/" className={styles.navigation__item}> 
        🌎 Home 
      </NavLink>
     
      <NavLink to="/planets" className={styles.navigation__item}> 
        🪐 Planets 
      </NavLink>

      <NavLink to="/spacecrafts" className={styles.navigation__item} > 
        🚀 Spacecrafts 
      </NavLink>
      
      <p>=== Navbar here </p>
    </div>
    </>
  );
}

export default NavigationBar;