import React from 'react';
import { PropTypes } from 'prop-types';

const TransactionHistoryItem = ({ tableItem }) => (
  <>
    <td className="transaction-history__td">{tableItem.type}</td>
    <td className="transaction-history__td">{tableItem.amount}</td>
    <td className="transaction-history__td">{tableItem.currency}</td>
  </>
);

TransactionHistoryItem.propTypes = {
  tableItem: PropTypes.shape({
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }),
};

export default TransactionHistoryItem;
