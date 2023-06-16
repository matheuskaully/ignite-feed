import Form from './Form'
import Comment from './Comment'
import Avatar from './Avatar'

export default function Post() {
  return (
    <article className="mb-2 rounded-lg bg-zinc-900 p-10">
      <header className="flex items-center justify-between">
        {/* author */}
        <div className="flex items-center gap-4">
          {/* avatar */}
          <Avatar avatarSrc="https://avatars.githubusercontent.com/u/50453597?v=4" />
          {/* author info */}
          <div className="flex flex-col justify-center">
            <strong className="leading-relaxed">Matheus Kaúlly</strong>
            <span className="text-sm leading-relaxed text-zinc-400">
              Front-end Developer
            </span>
          </div>
        </div>
        {/* time */}
        <time
          title="14 de Junho às 12:01h"
          dateTime="2023-06-14 12:01:22"
          className="text-sm text-zinc-500"
        >
          Publicado há 1h
        </time>
      </header>

      {/* content */}
      <div className="mt-4 leading-relaxed text-zinc-400">
        <p className="mt-4">Fala galeraa 👋</p>
        <p className="mt-4">
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p className="mt-4">
          👉{' '}
          <a
            href="#"
            className="font-bold text-green-500 transition-colors hover:text-green-300"
          >
            jane.design/doctorcare
          </a>
        </p>
        <p className="mt-4">
          <a
            href="#"
            className="font-bold text-green-500 transition-colors  hover:text-green-300"
          >
            #novoprojeto
          </a>{' '}
          <a
            href="#"
            className="font-bold text-green-500 transition-colors  hover:text-green-300"
          >
            #nlw
          </a>{' '}
          <a
            href="#"
            className="font-bold text-green-500 transition-colors  hover:text-green-300"
          >
            #rocketseat
          </a>
        </p>
      </div>
      <Form />
      {/* CommentList */}
      <div className="mt-8">
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}
