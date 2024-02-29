import { useState } from 'react'

import styles from './Post.module.css'

import Avatar from './Avatar'
import Comment from './Comment'

export default function Post({ post }) {
  const [comments, setComments] = useState([...post.comments])
  const [commentText, setCommentText] = useState('')
  const [alreadyLiked, setAlreadyLiked] = useState([])

  const publishedAtFormatted = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
  }).format(post.publishedAt)

  const handlePublishCommentSubmit = (event) => {
    event.preventDefault()
    
    const comment = event.target.comment.value

    setComments([...comments,  {
      id: Math.floor(Math.random() * 1000),
      content: comment,
      publishedAt: new Date(),
      author: {
        avatarUrl: 'https://thispersondoesnotexist.com/',
        name: 'Anonymous',
        role: 'Anonymous',
      },
      likes: 0
    }])

    setCommentText('')
  }

  const handleTextareaChange = (event) => {
    setCommentText(event.target.value)
  }

  const handleDeleteComment = (commentId) => {
    const commentsWithoutDeletedOne = comments.filter(comment => comment.id !== commentId)

    setComments([...commentsWithoutDeletedOne])
  }

  const handleLikeComment = (commentId) => {
    const likedPostIndex = comments
        .findIndex(comment => comment.id === commentId);
   
    if (likedPostIndex !== -1) {
      const isAlreadyLikedComment = alreadyLiked.includes(likedPostIndex)
      
      const updatedComments = [...comments];

      const currentLikes = isAlreadyLikedComment
        ? updatedComments[likedPostIndex].likes - 1
        : updatedComments[likedPostIndex].likes + 1
   
       updatedComments[likedPostIndex] = {
         ...updatedComments[likedPostIndex],
         likes: currentLikes,
       };
   
      setComments(updatedComments);

      if (!isAlreadyLikedComment) {
        setAlreadyLiked([...alreadyLiked, likedPostIndex])
      } else {
        const updatedAlreadyLiked = alreadyLiked
          .filter(index => index !== likedPostIndex)
        
        setAlreadyLiked(updatedAlreadyLiked)
      }
    }
  };
  
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar image={post.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time dateTime={publishedAtFormatted}>{publishedAtFormatted}</time>
      </header>
      
      <div className={styles.content}>
        {
          post.content
              .map((content, index) => (<p key={index}>{content}</p>))
        }
        {
          post.hashtags
              .map((hashtag, index) => (<a key={index}>{hashtag}</a>))
        }
      </div>
      
      <form onSubmit={handlePublishCommentSubmit} className={styles.form}>
        <strong>Deixe seu feedback</strong>

        <textarea
          onChange={handleTextareaChange}
          name="comment"
          value={commentText}
          required
          placeholder='Deixe um comentário' />

        <div>
          <button type="submit">Publicar</button>
        </div>
      </form>

      <div className={styles.commentsList}>
        {
          comments.map((comment, index) =>
            <Comment
              key={comment.id}
              data={comment}
              alreadyLiked={alreadyLiked.includes(index)}
              onLikeComment={handleLikeComment}
              onDeleteComment={handleDeleteComment}
            />
          )
        }
      </div>
    </article>
  )  
}