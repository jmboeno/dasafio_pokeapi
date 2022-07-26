import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadData } from '../../redux/actions';
import ButtonBar from '../ButtonBar/ButtonBar';
import './List.css';
import Card from '../Card/Card';

const List = () => {
  const [pokemons, setPokemons] = useState();
  const { page, data } = useSelector((state) => state);
  const dispatch = useDispatch();

  const loadPokemons = async (url) => {
    const response = await fetch(url);
    const jsonData = await response.json();
    setPokemons(jsonData);
    dispatch(loadData(jsonData));
  };

  useEffect(() => {
    loadPokemons(page);
  }, []);

  const getList = () => {
    return (
      pokemons &&
      pokemons.results.map((pokemon) => (
        <li key={pokemon.name}>
          <Card
            id={pokemon.url.split('/')[6]}
            url={pokemon.url}
            name={pokemon.name}
            img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              pokemon.url.split('/')[6]
            }.png`}
          />
        </li>
      ))
    );
  };

  return (
    <div className="list-container" data-testid="list-container">
      <ul>{pokemons && getList()}</ul>
      <ButtonBar
        previous={data.previous}
        next={data.next}
        loadPage={loadPokemons}
      />
    </div>
  );
};

export default List;
