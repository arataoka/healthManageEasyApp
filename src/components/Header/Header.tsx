import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Style from './_Header.module.scss';
import { useHistory } from 'react-router-dom';
import { Store } from '../../store/index';

const Header: React.FC = () => {
  const [term, setTerm] = useState('');
  const history = useHistory();
  const { globalState } = useContext(Store);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    history.push(`/search?query=${term}`);
  };
  useEffect(() => {
    setTerm(globalState.term);
  }, [globalState.term]);

  return (
    <div className={Style.header}>
      <div className={Style.item}>
        <Link to="/">MeTube</Link>
      </div>
      <div className={Style.item}>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="検索"
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
