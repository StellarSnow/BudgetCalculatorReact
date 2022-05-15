const Income = (props) => {
  const { transaction, deleteTransaction } = props;

  const onDeleteClickHandler = (event) => {
    deleteTransaction(+event.target.closest('.item').dataset.transactionId);
  }

  return (
    <div className="item" data-transaction-id={transaction.id}>
      <div className="item__description">{transaction.description}</div>
      <div className="right">
        <div className="item__value">+ ${transaction.amount}</div>
        <div className="item__delete">
          <button className="item__delete--btn" onClick={onDeleteClickHandler}>
            <i className="ion-ios-close-outline"></i>
          </button>
        </div>
      </div>
      <div className="item__date">{transaction.date}</div>
      </div>
  );
}

export default Income;