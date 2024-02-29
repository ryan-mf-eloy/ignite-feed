import styles from './Sidebar.module.css'

import { PencilLine } from 'phosphor-react'

import Avatar from './Avatar'

import userBanner from '../../assets/user-banner.jpg'

export default function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.cover} style={{
                backgroundImage: `url("${userBanner}")`,
            }}></div>

            <Avatar
                image="https://avatars.githubusercontent.com/u/67113173?s=400&v=4"
                style={{
                marginTop: '-35px'
            }}
            />

            <div className={styles.info}>
                <strong>Ryan Eloy</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <button>
                    <PencilLine size={20} /> Editar seu perfil
                </button>
            </footer>
        </aside>
    )
}