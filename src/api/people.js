export async function getPeople() {
    const response = await fetch(`https://swapi.co/api/people?limit=20`);
    const { results } = await response.json();

    return results.map(person => ({
        name: person.name,
        eye_color: person.eye_color,
        birth_year: person.birth_year,
        species: person.species,
        films: person.films
    }));
}
