import React from 'react';

import { FilmLoader } from '../FilmLoader';

import { PersonStyles } from './styles';

export function Person({ person }) {
    return (
        <PersonStyles>
            <h2>{person.name}</h2>
            <div>
                <span>Eye Color:</span>
                <span>{person.eye_color}</span>
            </div>
            <div>
                <span>Birth Year:</span>
                <span>{person.birth_year}</span>
            </div>
            <FilmLoader films={person.films} />
        </PersonStyles>
    );
}
