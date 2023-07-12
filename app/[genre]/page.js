

export function generateStaticParams() {
    return [
      { genre: "comedy", number: 6 },
      { genre: "drama", number: 6 },
      { genre: "horror", number: 6 },
    ];
  }




export default function Page({ params: { genre } }) {
  return (
    <main className="p-8">
      <h1 className="capitalize text-2xl text-orange-400 font-semi-bold">
        {genre} Movies
      </h1>
    </main>
  );
}
