import React from 'react';

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
      {transactions.sort(compare).map(({ id, type, amount, currency }) => (
        <tr key={id} className="transaction-history__tr">
          <td className="transaction-history__td">{type}</td>
          <td className="transaction-history__td">{amount}</td>
          <td className="transaction-history__td">{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default TransactionHistory;
