const BudgetTitle = () => { 
  const options = { year: 'numeric', month: 'long' };
  const date = new Intl.DateTimeFormat('en-CA', options).format(new Date());

  return(
    <div className="budget__title">
      Available Budget in <span class="budget__title--month">{date}:</span>
    </div>
  );
}

export default BudgetTitle;