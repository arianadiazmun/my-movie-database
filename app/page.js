import Hero from "./shared/Hero";
import MovieScroll from "./shared/MovieScroll";

export default function Home() {
  return (
    <main>
      <Hero />
      <MovieScroll genre="comedy" number={6}/>
      <MovieScroll genre="drama" number={6}/>
      <MovieScroll genre="horror" number={6}/>
    </main>
  );
}
