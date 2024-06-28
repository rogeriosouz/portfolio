export default function Footer() {
  return (
    <div className="container mx-auto flex max-w-4xl p-4 text-sm">
      <p className="flex-grow">
        &copy; {new Date().getFullYear()} &middot; Desenvolvido por <a href="https://www.linkedin.com/in/rogerio-pereira-447980248/" target="_blank" className="underline">Rogerio pereira</a>.
      </p>
    </div>
  )
}
