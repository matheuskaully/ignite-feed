export default function Form() {
  return (
    <form className="mt-6 w-full border-t border-zinc-800 pt-6">
      <strong className="leading-relaxed">Deixe seu feedback</strong>

      <textarea
        className="mt-4 h-24 w-full resize-none rounded-lg border-none bg-zinc-950 p-4 leading-[1.4rem] placeholder:text-zinc-600"
        placeholder="Deixe um comentário"
      />

      <footer>
        <button
          className="mt-4 cursor-pointer rounded-lg border-none bg-green-500 px-6 py-4 font-bold transition-colors focus-within:visible hover:bg-green-400"
          type="submit"
        >
          Publicar
        </button>
      </footer>
    </form>
  )
}
