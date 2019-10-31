export async function getSpecies(speciesUrlList) {
    const speciesPromises = speciesUrlList.map(speciesUrl => fetch(speciesUrl));
    const responses = await Promise.all(speciesPromises);

    const jsonPromises = responses.map(response => response.json());
    const species = await Promise.all(jsonPromises);

    return species.map(s => ({
        name: s.name
    }));
}
