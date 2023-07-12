import Link from "next/link"

const genres= [
    {title: 'Comedies', slug: 'comedy'},
    {title: 'Dramas', slug: 'drama'},
    {title: 'Horrors', slug: 'horror'},
]


export default function NavBar() {
  return (
    <header className="text-zinc-300 bg-zinc-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-zinc-50 mb-4 md:mb-0"
        >
          My Movie DB
        </Link>
        <nav className="flex flex-wrap items-center text-base justify-center md:ml-auto">
            {genres.map(genre => (
                <Link key={genre.slug} className="mr-5 hover:text-orange-300" href={'/' + genre.slug}>
                    {genre.title}
                </Link>
            ))}
        </nav>
      </div>
    </header>
  )}
