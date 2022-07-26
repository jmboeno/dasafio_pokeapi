import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setPokemon } from '../../redux/actions';
import './Card.css';

const Card = ({ id, url, name, img }) => {
  const dispatch = useDispatch();

  return (
    <Link
      onClick={() => {
        dispatch(setPokemon(url));
      }}
      to="/details"
      data-testid="card-link"
    >
      <div className="card-container">
        <span>#{id}</span>
        <h2>{name}</h2>
        <img src={img} />
      </div>
    </Link>
  );
};

export default Card;
