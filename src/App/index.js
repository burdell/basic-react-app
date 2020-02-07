import 'regenerator-runtime/runtime';
import React, { useEffect, useState } from 'react';

import { getPeople } from '../api/people';
import { Person } from '../Person';

import { AppStyles, PersonList } from './styles';

export function App() {
  const [people, setPeople] = useState([]);
  const [isLoading, setLoading] = useState(true);

  async function fetchPeople() {
    const peopleList = await getPeople();
    setPeople(peopleList);
    setLoading(false);
  }
  useEffect(() => {
    fetchPeople();
  }, []);

  return (
    <AppStyles>
      {isLoading && <div>⏳</div>}
      {people.length > 0 && (
        <div>
          <h1>Some Star Wars People</h1>
          <PersonList>
            {people.map(person => (
              <Person person={person} key={person.name} />
            ))}
          </PersonList>
        </div>
      )}
    </AppStyles>
  );
}
