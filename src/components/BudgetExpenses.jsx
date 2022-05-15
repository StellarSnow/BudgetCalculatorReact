const BudgetExpenses = (props) => {  
  const { expensesValue } = props;
  
  return (
    <div className="budget__expenses">
      <div className="budget__expenses--text">Expenses</div>
      <div className="right">
        <div className="budget__expenses--value">- ${expensesValue}</div>
        <div className="budget__expenses--percentage">50%</div>
      </div>
    </div>
  );
}

export default BudgetExpenses;