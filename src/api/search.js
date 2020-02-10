import { formatPerson } from './people';
import { formatFilm } from './films';
import { formatSpecie } from './species';

export async function search(searchTerm) {
  const responses = await Promise.all([
    fetch(`https://swapi.co/api/people?limit=20&search=${searchTerm}`),
    fetch(`https://swapi.co/api/films?limit=20&search=${searchTerm}`),
    fetch(`https://swapi.co/api/species?limit=20&search=${searchTerm}`)
  ]);

  const jsonPromises = responses.map(response => response.json());
  const resultPromises = await Promise.all(jsonPromises);

  const [peopleResult, filmResult, speciesResult] = resultPromises;
  return {
    people: peopleResult.results.map(formatPerson),
    films: filmResult.results.map(formatFilm),
    species: speciesResult.results.map(formatSpecie)
  };
}
