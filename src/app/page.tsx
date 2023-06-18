import Header from '@/components/Header'
import Post from '@/components/Post'
import Sidebar from '@/components/Sidebar'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/80074326?v=4',
      name: 'Gabriel Bezerra',
      role: 'Mobile Developer (Kotlin and Flutter)',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link', content: 'bielbezerra.design/doctorcare' },
    ],
    publishedAt: new Date('2023-01-16 13:04:23'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/62675614?v=4',
      name: 'Pedro Miguel',
      role: 'Front-end Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoal 👋' },
      {
        type: 'paragraph',
        content:
          'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 ',
      },
      { type: 'link', content: 'pedromiguel.design/boomber' },
    ],
    publishedAt: new Date('2023-01-12 18:00:23'),
  },
]

export default function Home() {
  return (
    <div>
      <Header />
      <div className="mx-auto my-8 grid max-w-[70rem] grid-cols-[256px_1fr] items-start gap-2 px-4 py-0 max-md:grid-cols-[1fr]">
        <div>
          <Sidebar />
        </div>
        <div>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
