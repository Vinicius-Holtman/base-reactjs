import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Post } from "./components/Post";

import styles from './App.module.css'

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Vinicius" content="alguam descrição" />
          <Post author="Outro autor" content="alguam descrição" />
        </main>
      </div>
    </>
  )
}
