import React from 'react';
import { render, waitForElement, fireEvent } from '@testing-library/react';

import { App } from './index';

jest.mock('../api/people', () => ({
    getPeople: () =>
        Promise.resolve([
            {
                name: 'Art Vandelay',
                eye_color: 'Misty blue',
                birth_year: '1971',
                species: ['https://notareal.url/1'],
                films: ['https://notareal.url/2']
            },
            {
                name: 'Rusty Shackelford',
                eye_color: 'Hazel Brown',
                birth_year: '1992',
                species: ['https://notareal.url/3'],
                films: ['https://notareal.url/4']
            }
        ])
}));

jest.mock('../api/films', () => ({
    getFilms: () =>
        Promise.resolve([
            {
                title: 'A Cool Movie'
            },
            {
                title: 'A Very Cool Movie'
            }
        ])
}));

describe('App test', () => {
    it('loads a list of people', async () => {
        const { getByText } = render(<App />);

        getByText('⏳');

        await waitForElement(() => getByText('Some Star Wars People'));

        getByText('Art Vandelay');
        getByText('Misty blue');
        getByText('1971');

        getByText('Rusty Shackelford');
        getByText('Hazel Brown');
        getByText('1992');
    });

    it("loads a person's films", async () => {
        const { getByText, getAllByText } = render(<App />);
        await waitForElement(() => getByText('Some Star Wars People'));

        const loadFilmsButton = getAllByText('Load Films');
        fireEvent.click(loadFilmsButton[0]);

        await waitForElement(
            () => getByText('A Cool Movie') && getByText('A Very Cool Movie')
        );
    });
});
