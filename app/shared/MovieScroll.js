const movies = [
  {
    id: 1,
    title: "Lady Bird",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BODhkZGE0NDQtZDc0Zi00YmQ4LWJiNmUtYTY1OGM1ODRmNGVkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    imdbId: "tt4925292",
  },
  {
    id: 5,
    title: "Coco",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_SX300.jpg",
    imdbId: "tt2380307",
  },
  {
    id: 4,
    title: "Eighth Grade",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BMzVlYzgxYjAtYzhhZi00MDc1LTlkZDMtMTRhZWI0MTg5YTRjXkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_SX300.jpg",
    imdbId: "tt7014006",
  },
];
async function getData(genre) {
  const res = await fetch(`https://api.sampleapis.com/movies/${genre}`);
  return res.json();
}

import MovieCard from "./MovieCard";

export function generateStaticParams() {
  return [
    { genre: "comedy", number: 6 },
    { genre: "drama", number: 6 },
    { genre: "horror", number: 6 },
  ];
}

export default async function MovieScroll({ genre, number }) {
  const allMovies = await getData(genre);

  const movies = allMovies.slice(allMovies.length - number);

  return (
    <section className="text-zinc-400">
      <div className="container px-5 py-12 mx-auto">
        <h2 className="capitalize font-medium title-font mb-4 text-zinc-50 text-xl">
          {genre}
        </h2>
        <div className="flex flex-wrap -m-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} genre={genre} />
          ))}
        </div>
      </div>
    </section>
  );
}
