import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './CardSet.css';

const CardSet = ({ wrap, titleArray }) => {
  return (
    <div
      className="all-sets"
      style={{ gridTemplateColumns: `repeat(${wrap}, 208px)` }}
    >
      {titleArray.map((obj, index) => {
        return <Card title={obj.title} isChecked={obj.isChecked} key={index} />;
      })}
    </div>
  );
};

const Card = ({ title, isChecked }) => {
  const [isUserChecked, setIsUserChecked] = useState(isChecked);

  const changeChecked = (event) => {
    const isChecked = event.target.checked;
    setIsUserChecked(isChecked);
  };

  useEffect(() => {
    setIsUserChecked(isChecked);
  }, [isChecked]);

  return (
    <div className="all-sets__item">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        100 words{' '}
        <input
          type="checkbox"
          checked={isUserChecked}
          onChange={changeChecked}
        />
      </div>
      <img src="/images/picture.jpg" alt="" />
      <div>
        <p>{title}</p>
      </div>
      <NavLink to="/learn">
        <button type="button" className="btn btn-success w-100">
          Learn
        </button>
      </NavLink>
    </div>
  );
};

export default CardSet;
