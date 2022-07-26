import React from 'react';
import { useDispatch } from 'react-redux';
import { setPage } from '../../redux/actions';
import { Link } from 'react-router-dom';
import './ButtonBar.css';

const ButtonBar = ({ previous, next, loadPage, back }) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    if (e == previous) {
      loadPage(previous);
      dispatch(setPage(previous));
    }
    if (e == next) {
      loadPage(next);
      dispatch(setPage(next));
    }
  };

  return (
    <div className="buttonbar-container" data-testid="buttonbar-container">
      <div>
        {previous && (
          <Link
            to="/"
            onClick={() => {
              handleClick(previous);
            }}
          >
            Voltar
          </Link>
        )}
        {next && (
          <Link
            to="/"
            onClick={() => {
              handleClick(next);
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
