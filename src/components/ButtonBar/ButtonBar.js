import React from 'react';
import { useDispatch } from 'react-redux';
import { setPage } from '../../redux/actions';
import { Link } from 'react-router-dom';
import './ButtonBar.css';

const ButtonBar = ({ previous, next, loadPage, back }) => {
  const dispatch = useDispatch();

  return (
    <div className="container-buttonbar">
      <div>
        {previous && (
          <Link
            to="/"
            onClick={() => {
              loadPage(previous);
              dispatch(setPage(previous));
            }}
          >
            Voltar
          </Link>
        )}
        {next && (
          <Link
            to="/"
            onClick={() => {
              loadPage(next);
              dispatch(setPage(next));
            }}
            style={{ marginLeft: 'auto' }}
          >
            Próximo
          </Link>
        )}
        {back && (
          <Link to="/" className="btn-back">
            Voltar
          </Link>
        )}
      </div>
    </div>
  );
};

export default ButtonBar;
