import Image from 'next/image'

interface AvatarSource {
  avatarSrc: string
  hasBorder?: boolean
}

export default function Avatar({ avatarSrc, hasBorder = true }: AvatarSource) {
  return (
    <Image
      className={`${
        hasBorder
          ? 'box-content rounded-lg border-4 border-zinc-900 outline outline-2 outline-green-400'
          : 'box-content h-[50px] w-[50px] rounded-lg'
      }`}
      width={50}
      height={50}
      src={avatarSrc}
      alt=""
    />
  )
}
