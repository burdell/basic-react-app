import React, { useState } from 'react';

import { getFilms } from '../api/films';

export function FilmLoader({ films }) {
    const [filmList, setFilmList] = useState([]);

    async function fetchFilms() {
        const filmList = await getFilms(films);
        setFilmList(filmList);
    }

    return (
        <div>
            {filmList.length > 0 ? (
                <div>
                    <div>Appears in:</div>
                    {filmList.map(film => (
                        <div key={film.title}>
                            <span>{film.title}</span>
                        </div>
                    ))}
                </div>
            ) : (
                <button onClick={fetchFilms}>Load Films</button>
            )}
        </div>
    );
}
