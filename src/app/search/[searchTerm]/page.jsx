import Results from "@/components/Results";

export default async function SearchPage({ params }) {
  const seachTerm = params.searchTerm;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${seachTerm}&language=pt-BR&page=1&include_adult=false`
  );
  const data = await res.json();
  const results = data.results;
  return (
    <div>
      {results &&
        results.length ===
        <h1 className="text-center pt-6">Sem Resultados Encontrados</h1>}
      {results && <Results results={results} />}
    </div>
  );
}
