import transactions from 'components/transactions.json';

const TransactionHistory = () => {
  return (
    <table class="transaction-history">
      <thead className="table-header">
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className="table-body">
        {transactions.map(transaction => (
          <tr key={transaction.id}>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
