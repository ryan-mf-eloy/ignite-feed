import styles from './Avatar.module.css'

export default function Avatar({ ...props }) {
  return (
    <div
      className={styles.avatar}
      style={{
      backgroundImage: `url("${props.image}")`,
      ...props.style,
    }}
    >
    </div>
  )
}