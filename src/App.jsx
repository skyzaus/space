import {useContext} from "react";
import {BrowserRouter } from "react-router-dom";

import styles from "./App.module.css";
import {LoadingContext} from "./context/LoadingProvider";

import AppRoute from "./routes/AppRoute";
import Motto from "./components/Motto/Motto";
import Loading from "./components/Loading/Loading";
import { ThemeProvider } from "./context/ThemeContext";
import DarkModeSwitch from "./components/DarkModeSwitch/DarkModeSwitch";
import NavigationBar from "./components/NavigationBar/NavigationBar";

function App ()
{
  const {isLoading} = useContext(LoadingContext);

  return (
    <>
        <BrowserRouter>
        <div className={styles["app"]}>
        <ThemeProvider>
  <DarkModeSwitch/>
</ThemeProvider>
          <header className={styles["app__header"]}>
            <NavigationBar/>
          </header>

          <main className={styles["app__main"]}>
            <AppRoute />
          </main>

          <footer className={styles["app__footer"]}>
            <Motto />
          </footer>
        </div>
      </BrowserRouter>

      {
        isLoading
        &&
        <Loading />
      }
    </>
  );
}

export default App;
