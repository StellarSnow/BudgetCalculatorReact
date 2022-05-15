const BudgetIncome = (props) => {
  const { totalIncome } = props;
  
  return (
    <div className="budget__income">
      <div className="budget__income--text">Income</div>
      <div className="right">
        <div className="budget__income--value">+ ${totalIncome}</div>
        <div className="budget__income--percentage">&nbsp;</div>
      </div>
    </div>
  );
}

export default BudgetIncome;