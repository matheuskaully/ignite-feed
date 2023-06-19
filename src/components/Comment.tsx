/* eslint-disable no-octal-escape */
import { ThumbsUp, Trash2 } from 'lucide-react'
import Avatar from './Avatar'
import { useState } from 'react'

interface CommentProps {
  content: string
  commentedDateRelativeToNow: string
  onDeleteComment: (comment: string) => void
}

export default function Comment({
  content,
  commentedDateRelativeToNow,
  onDeleteComment,
}: CommentProps) {
  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    })
  }

  const [likeCount, setLikeCount] = useState(0)

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
          <header className="flex items-start justify-between gap-2">
            {/* AuthorAndTime */}
            <div className="flex flex-col">
              <strong className="text-sm leading-relaxed">
                Matheus Kaúlly
              </strong>
              <time
                title={commentedDateRelativeToNow}
                className="text-xs leading-relaxed text-zinc-500"
              >
                {commentedDateRelativeToNow}
              </time>
            </div>
            <button
              onClick={handleDeleteComment}
              className="rounded-sm border-none text-zinc-500 transition-colors hover:text-red-500"
              title="Deletar comentário"
            >
              <Trash2 size={24} />
            </button>
          </header>
          <p className="mt-4 text-sm text-zinc-400">{content}</p>
        </div>
        <footer className="mt-4">
          <button
            onClick={handleLikeComment}
            className="flex items-center rounded-sm border-none text-sm text-gray-500 transition-colors hover:text-green-400"
          >
            <ThumbsUp size={20} className="mr-2" />
            Aplaudir{' '}
            {likeCount > 0 && (
              <span className="before:px-1 before:py-0 before:content-['\2022']">
                {likeCount}
              </span>
            )}
          </button>
        </footer>
      </div>
    </div>
  )
}
