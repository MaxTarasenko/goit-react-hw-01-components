import React from 'react';
import PropTypes from 'prop-types';

const StatisticsItem = ({ statsItem }) => (
  <>
    <span className="statistics__list__item__label">{statsItem.label}</span>
    <span className="statistics__list__item__percentage">
      {statsItem.percentage}%
    </span>
  </>
);

StatisticsItem.propTypes = {
  statsItem: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};

export default StatisticsItem;
