import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Ignite Feed',
  description:
    'IgniteFeed is a project that simulates a feed of publications, where it is possible to make a comment on publications, delete the comment and mark as liked those comments that you liked.',
}

export default function RootLayout({
  children,
}: {
  // eslint-disable-next-line no-undef
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.className} bg-zinc-950 text-zinc-50`}>
        {children}
      </body>
    </html>
  )
}
