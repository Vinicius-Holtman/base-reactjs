import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from '../Avatar/Avatar'
import styles from './Comment.module.css'

export function Comment({ comment, onDeleteComment }) {
  const [likeCount, setlikeCount] = useState(0)
      
  function handleDeleteComment() {
    onDeleteComment(commment)
  }

  function handleLikeComment() {
    setlikeCount((state) => {
      return state + 1;
    });
  }

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

            <button
              onClick={handleDeleteComment}
              title='Deletar comentario'
            >
              <Trash size={24} />
            </button>
          </header>

          <p>{comment}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}