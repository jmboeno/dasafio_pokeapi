import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ButtonBar from '../ButtonBar/ButtonBar';
import './Details.css';

const Details = () => {
  const [pokemon, setPokemon] = useState();
  const [isFront, setIsFront] = useState(true);
  const { pokemon_url } = useSelector((state) => state);

  const loadPokemon = async (url) => {
    const response = await fetch(url);
    const jsonData = await response.json();
    setPokemon(jsonData);
  };

  useEffect(() => {
    loadPokemon(pokemon_url);
  }, []);

  const changeImage = () => {
    if (isFront) {
      setIsFront(false);
    } else {
      setIsFront(true);
    }
  };

  const getDetails = () => {
    return (
      <div style={{ padding: '1em' }} data-testid="content-details">
        <div className="content">
          <div className="info grid mb">
            <div className="card-info">
              <span className="id-pokemon">#{pokemon.id}</span>
              <h2>{pokemon.name}</h2>
              <div className="img-pokemon">
                <img
                  src={
                    isFront
                      ? pokemon.sprites.front_default
                      : pokemon.sprites.back_default
                  }
                  data-testid="image"
                />
                <div>
                  <button
                    onClick={() => {
                      changeImage();
                    }}
                    data-testid="btn-change-image"
                  >
                    {isFront ? 'Ver Costas' : 'Ver Frente'}
                  </button>
                </div>
              </div>
            </div>

            <div className="card-info">
              <h4>Informações</h4>
              <div className="description">
                <span>
                  <strong>Altura:</strong> {pokemon.height * 10}cm
                </span>
                <span>
                  <strong>Peso:</strong> {pokemon.weight / 10}kg
                </span>
              </div>
            </div>

            <div className="card-info">
              <h4>Habilidades(s)</h4>
              <div className="description">
                {pokemon.abilities.map((att, index) => (
                  <span key={index}>{att.ability.name}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="info grid">
            <div className="card-info">
              <h4>Status Base</h4>
              <div style={{ paddingTop: '1em' }}>
                {pokemon.stats.map((att, index) => (
                  <div key={index}>
                    <span style={{ textTransform: 'capitalize' }}>
                      {att.stat.name} ({att.base_stat}/200):
                    </span>
                    <div className="stats">
                      <div
                        className="stats"
                        style={{
                          width: att.base_stat / 2 + '%',
                          background: '#212121',
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="card-info">
              <h4>Tipo(s)</h4>
              <div className="description">
                {pokemon.types.map((att, index) => (
                  <span key={index}>{att.type.name}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="details-container" data-testid="details-container">
      {pokemon && getDetails()}
      <ButtonBar previous={false} next={false} loadPage={false} back={true} />
    </div>
  );
};

export default Details;
