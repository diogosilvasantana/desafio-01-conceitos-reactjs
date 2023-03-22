import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>

        <main className={styles.container}>
          <Tasks />
        </main>

      </div>
    </div>
  );
}
