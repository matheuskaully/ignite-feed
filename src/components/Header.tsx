import Image from 'next/image'
import igniteLogo from '../assets/ignite-logo.svg'

export default function Header() {
  return (
    <header className="flex w-full items-center justify-center gap-2 bg-zinc-900 p-5">
      <Image src={igniteLogo} alt="Ignite Feed" />
      <strong className="text-2xl">Ignite Feed</strong>
    </header>
  )
}
