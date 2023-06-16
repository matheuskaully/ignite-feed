import Header from '@/components/Header'
import Post from '@/components/Post'
import Sidebar from '@/components/Sidebar'

export default function Home() {
  return (
    <div>
      <Header />
      <div className="mx-auto my-8 grid max-w-[70rem] grid-cols-[256px_1fr] items-start gap-2 px-4 py-0 max-md:grid-cols-[1fr]">
        <div>
          <Sidebar />
        </div>
        <div>
          <Post />
          <Post />
        </div>
      </div>
    </div>
  )
}
