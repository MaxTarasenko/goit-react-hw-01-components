import React from 'react';
import PropTypes from 'prop-types';
import TransactionHistoryItem from './TransactionHistoryItem';

function compare(a, b) {
  if (a.type > b.type) return 1;
  if (b.type > a.type) return -1;
  return 0;
}
const TransactionHistory = ({ transactions }) => (
  <table className="transaction-history">
    <thead>
      <tr>
        <th className="transaction-history__name">Type</th>
        <th className="transaction-history__name">Amount</th>
        <th className="transaction-history__name">Currency</th>
      </tr>
    </thead>

    <tbody>
      {transactions.sort(compare).map(tableItem => (
        <tr key={tableItem.id} className="transaction-history__tr">
          <TransactionHistoryItem tableItem={tableItem} />
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;
