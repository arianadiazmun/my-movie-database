import Hero from "./shared/Hero";
import MovieScroll from "./shared/MovieScroll";

export default function Home() {
  return (
    <main>
      <Hero />
      <MovieScroll genre="comedy" number={3}/>
      <MovieScroll genre="drama" number={3}/>
      <MovieScroll genre="horror" number={3}/>
    </main>
  );
}
