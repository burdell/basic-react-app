export async function getFilms(filmUrlList) {
    const filmPromises = filmUrlList.map(filmUrl => fetch(filmUrl));
    const responses = await Promise.all(filmPromises);

    const jsonPromises = responses.map(response => response.json());
    const films = await Promise.all(jsonPromises);

    return films.map(film => ({
        title: film.title
    }));
}
