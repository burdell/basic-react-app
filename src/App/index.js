import 'regenerator-runtime/runtime';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getPeople } from '../api/people';
import { Person } from '../Person';

import { PersonList } from './styles';

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
    <>
      <Link to="/search">Search Page</Link>
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
    </>
  );
}
