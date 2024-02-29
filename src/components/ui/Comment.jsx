import styles from "./Comment.module.css"

import Avatar from './Avatar'
import { ThumbsUp, Trash } from "phosphor-react"

export default function Comment({
  data,
  alreadyLiked,
  onDeleteComment,
  onLikeComment
}) {
  const publishedAtFormatted = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
  }).format(data.publishedAt)

  return (
    <div className={styles.comment}>
      <Avatar
        image={data.author.avatarUrl}
        style={{
          border: 'none',
          boxShadow: 'none',
          widyh: '3rem',
          height: '3rem'
        }}
      />
      
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div>
              <strong>{data.author.name}</strong>
              <time
                title={publishedAtFormatted}
                dateTime={publishedAtFormatted}>
                {publishedAtFormatted}
              </time>
            </div>

            <button
              title="Deletar comentário"
              onClick={() => onDeleteComment(data.id)}
            >
              <Trash size={24} />
            </button>
          </header>

          <p>{data.content}</p>
        </div>

        <footer>
          <button
            datatype={alreadyLiked ? "liked" : ""}
            onClick={() => onLikeComment(data.id)}
          >
            <ThumbsUp />
            Curtir <span>{data.likes}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}