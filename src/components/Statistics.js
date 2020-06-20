import React from 'react';

const classNameColors = [
  'statistics__color1',
  'statistics__color2',
  'statistics__color3',
  'statistics__color4',
  'statistics__color5',
];
const Statistics = ({ title, stats }) => (
  <section className="statistics">
    {title && <h2 className="statistics__title">{title.toUpperCase()}</h2>}

    <ul className="statistics__list">
      {stats.map(({ id, label, percentage }, index) => (
        <li
          key={id}
          className={'statistics__list__item ' + classNameColors[index]}
        >
          <span className="statistics__list__item__label">{label}</span>
          <span className="statistics__list__item__percentage">
            {percentage}%
          </span>
        </li>
      ))}
    </ul>
  </section>
);

export default Statistics;
