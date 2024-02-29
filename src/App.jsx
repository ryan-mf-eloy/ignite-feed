import "./styles/global.css"
import styles from "./styles/App.module.css"
/**
 * Global components
 */
import Header from "./components/ui/Header"
import Post from "./components/ui/Post"
import Sidebar from "./components/ui/Sidebar"

/**
 * Fake API Return
 */
const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/67113173?s=400&v=4',
      name: 'Ryan Eloy',
      role: 'Javascript Developer',
    },
    content: [
      'Fala galeraa 👋',
      'Esse é só mais um projeto React + Vite básico para o meu portfólio. 🚀',
      '👉 ryaneloy.dev'
    ],
    hashtags: ['#novoprojeto', '#nlw', '#rocketseat'],
    publishedAt: new Date('2024-11-05 17:43:29'),
    comments: [
      {
        id: 1,
        content: 'Muito bom, parabéns!',
        publishedAt: new Date('2024-11-05 19:20:13'),
        author: {
          avatarUrl: 'https://thispersondoesnotexist.com/',
          name: 'Pereira',
          role: 'C# Developer',
        },
        likes: 4
      }
    ]
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://thispersondoesnotexist.com/',
      name: 'Dino Sauro',
      role: 'Javascript Developer',
    },
    content: [
      'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻',
      'Acesse e deixe seu feedback 👉 ryaneloy.dev',
    ],
    hashtags: ['#uiux', '#userexperience'],
    publishedAt: new Date('2024-11-05 19:20:13'),
    comments: [
      {
        id: 2,
        content: 'Muito bom, parabéns!',
        publishedAt: new Date('2024-11-05 19:20:13'),
        author: {
          avatarUrl: 'https://thispersondoesnotexist.com/',
          name: 'Silva',
          role: 'Python Developer',
        },
        likes: 12
      }
    ]
  }
]

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>
          {
            posts.map(postData => (
              <Post key={postData.id} post={postData} />
            ))
          }
        </main>
      </div>
    </>
  )
}

export default App
