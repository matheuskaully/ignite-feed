/* eslint-disable no-octal-escape */
import { ThumbsUp, Trash2 } from 'lucide-react'
import Avatar from './Avatar'

export default function Comment() {
  return (
    // Comment
    <div className="mt-6 flex gap-4">
      <Avatar
        hasBorder={false}
        avatarSrc="https://avatars.githubusercontent.com/u/50453597?v=4"
      />
      {/* CommentBox */}
      <div className="flex flex-col">
        {/* CommentContent */}
        <div className="rounded-lg bg-zinc-800 p-4">
          <header className="flex items-start justify-between">
            {/* AuthorAndTime */}
            <div className="flex flex-col">
              <strong className="text-sm leading-relaxed">
                Matheus Kaúlly
              </strong>
              <time
                title="14 de Junho às 12:01h"
                dateTime="2023-06-14 12:01:22"
                className="text-xs leading-relaxed text-zinc-500"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button
              className="rounded-sm border-none text-zinc-500 transition-colors hover:text-red-500"
              title="Deletar comentário"
            >
              <Trash2 size={24} />
            </button>
          </header>
          <p className="mt-4 text-sm text-zinc-400">
            Muito bom Devon, parabéns!! 👏👏
          </p>
        </div>
        <footer className="mt-4">
          <button className="flex items-center rounded-sm border-none text-sm text-gray-500 transition-colors hover:text-green-400">
            <ThumbsUp size={20} className="mr-2" />
            Aplaudir{' '}
            <span className="before:px-1 before:py-0 before:content-['\2022']">
              20
            </span>
          </button>
        </footer>
      </div>
    </div>
  )
}
