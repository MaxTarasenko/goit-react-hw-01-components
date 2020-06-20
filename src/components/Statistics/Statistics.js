import React from 'react';
import PropTypes from 'prop-types';
import StatisticsItem from './StatisticsItem';

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
      {stats.map((statsItem, index) => (
        <li
          key={statsItem.id}
          className={'statistics__list__item ' + classNameColors[index]}
        >
          <StatisticsItem statsItem={statsItem} />
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Statistics;
