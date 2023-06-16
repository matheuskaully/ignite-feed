import Link from 'next/link'
// import Image from 'next/image'
import { Edit3 } from 'lucide-react'
import Avatar from './Avatar'

/* eslint-disable @next/next/no-img-element */
export default function Sidebar() {
  return (
    <aside className="overflow-hidden rounded-lg bg-zinc-900">
      <img
        className="h-[72px] w-full object-cover"
        src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
      <div className="-mt-8 flex flex-col items-center">
        <Avatar avatarSrc="https://avatars.githubusercontent.com/u/50453597?v=4" />
        <strong className="mt-4 leading-relaxed text-zinc-50">
          Matheus Kaúlly
        </strong>
        <span className="text-sm text-zinc-400">Front-end Developer</span>
      </div>
      <footer className="mt-6 flex items-center justify-center border-t border-zinc-800 pb-8 pt-6">
        <Link
          href="#"
          className="bold flex h-[58px] w-[212px] items-center justify-center gap-2 rounded-lg border border-green-400 text-green-400 transition-colors hover:bg-green-400 hover:text-zinc-50"
        >
          <Edit3 size={20} />
          Editar seu perfil
        </Link>
      </footer>
    </aside>
  )
}
