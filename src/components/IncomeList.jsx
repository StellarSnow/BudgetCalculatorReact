import Income from "./Income";

const IncomeList = (props) => { 
  return (
    <div className="income">
      <h2 className="icome__title">Income</h2>
      <div className="income__list">
        {props.transactions.incomeList.map((transaction) => <Income transaction={transaction} deleteTransaction={props.deleteTransaction}/>)}
      </div>
    </div>
  );
}

export default IncomeList;