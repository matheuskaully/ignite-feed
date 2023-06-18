/* eslint-disable array-callback-return */
'use client'

import Comment from './Comment'
import Avatar from './Avatar'
import ptBR from 'date-fns/locale/pt-BR'
import { format, formatDistanceToNow } from 'date-fns'
import { useState } from 'react'

interface Content {
  type: string
  content: string
}
interface PostProps {
  author: {
    avatarUrl: string
    name: string
    role: string
  }
  content: Content[]
  publishedAt: Date
}

export default function Post({ author, content, publishedAt }: PostProps) {
  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    },
  )

  // console.log(format(new Date(), "'Cerca de' LLLL 'às' HH:mm"))

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  const commentedDateRelativeToNow = formatDistanceToNow(new Date(), {
    locale: ptBR,
    addSuffix: true,
  })

  const [comments, setComments] = useState<string[]>([])

  const [newCommentText, setNewCommentText] = useState<string>('')

  function handleCreateNewComment(event: any) {
    event.preventDefault()
    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange(event: any) {
    setNewCommentText(event.target.value)
  }

  function deleteComment(commentToDelete: string) {
    const commentWithoutDeleteOne = comments.filter((comment) => {
      return comment !== commentToDelete
    })
    setComments(commentWithoutDeleteOne)
  }

  return (
    <article className="mb-2 rounded-lg bg-zinc-900 p-10">
      <header className="flex items-center justify-between">
        {/* author */}
        <div className="flex items-center gap-4">
          {/* avatar */}
          <Avatar avatarSrc={author.avatarUrl} />
          {/* author info */}
          <div className="flex flex-col justify-center">
            <strong className="leading-relaxed">{author.name}</strong>
            <span className="text-sm leading-relaxed text-zinc-400">
              {author.role}
            </span>
          </div>
        </div>
        {/* time */}
        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
          className="text-sm text-zinc-500"
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      {/* content */}
      <div className="mt-4 leading-relaxed text-zinc-400">
        {content.map((line) => {
          if (line.type === 'paragraph') {
            return (
              <p key={line.content} className="mt-4">
                {line.content}
              </p>
            )
          } else if (line.type === 'link') {
            return (
              <p key={line.content} className="mt-4">
                👉{' '}
                <a
                  href="#"
                  className="font-bold text-green-500 transition-colors hover:text-green-300"
                >
                  {line.content}
                </a>
              </p>
            )
          }
        })}
      </div>
      {/* InputArea */}
      <form
        onSubmit={handleCreateNewComment}
        className="group mt-6 w-full border-t border-zinc-800 pt-6"
      >
        <strong className="leading-relaxed">Deixe seu feedback</strong>

        <textarea
          name="comment"
          onChange={handleNewCommentChange}
          value={newCommentText}
          className="mt-4 h-24 w-full resize-none rounded-lg border-none bg-zinc-950 p-4 leading-[1.4rem] placeholder:text-zinc-600"
          placeholder="Deixe um comentário"
        />
        <footer className="hidden group-focus-within:block">
          <button
            className="mt-4 cursor-pointer rounded-lg border-none bg-green-500 px-6 py-4 font-bold transition-colors hover:bg-green-400"
            type="submit"
          >
            Publicar
          </button>
        </footer>
      </form>

      {/* CommentList */}
      <div>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              commentedDateRelativeToNow={commentedDateRelativeToNow}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  )
}
