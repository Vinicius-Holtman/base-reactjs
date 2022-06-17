import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from '../Avatar/Avatar'
import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/Vinicius-Holtman.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Vinicius Holtman</strong>
              <time title='11 de Maio às 10:13' dateTime='2002-05-11 08:10:13'>Públicado há 1h</time>
            </div>

            <button title='Deletar comentario'>
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabens!!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}