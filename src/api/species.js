export async function getSpecies(speciesUrlList) {
  const speciesPromises = speciesUrlList.map(speciesUrl => fetch(speciesUrl));
  const responses = await Promise.all(speciesPromises);

  const jsonPromises = responses.map(response => response.json());
  const species = await Promise.all(jsonPromises);

  return species.map(formatSpecie);
}

export function formatSpecie(specie) {
  return {
    name: specie.name,
    average_lifespan: specie.average_lifespan,
    language: specie.language,
    average_height: specie.average_height
  };
}
