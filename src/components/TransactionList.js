import Transaction from "./Transaction.js";

class TransactionList {
  constructor() {
    this.incomeList = [];
    this.expenseList = [];
    this.id = 0;
  }

  addNewTransaction(amount, description) {
    amount >= 0 ? 
      this.incomeList.push(new Transaction(amount, description, this.setDate(), this.id++)) :
      this.expenseList.push(new Transaction(-amount, description, this.setDate(), this.id++));
  }

  removeTransaction(id) {
    let deleteTransaction = this.incomeList.find(transaction => transaction.id === Number.parseInt(id));

    if (deleteTransaction !== undefined) { 
      this.incomeList = this.incomeList.filter(transaction => transaction !== deleteTransaction);
    } else { 
      deleteTransaction = this.expenseList.find(transaction => transaction.id === Number.parseInt(id));

      if (deleteTransaction !== undefined)
        this.expenseList = this.expenseList.filter(transaction => transaction !== deleteTransaction);
    }
  }

  setDate() {
    let date;

    const options = { year: 'numeric', month: 'short', day: 'numeric' };
  
    date = new Intl.DateTimeFormat('en-CA', options).format(new Date());
    date = date.split(' ');
    date = `${date[0]}. ${date[1]} ${date[2]}`;

    return date;
  }

  addIncomes() {
    return this.incomeList.reduce((prev, curr) => prev + curr.amount, 0);
  }

  addExpenses() {
    return this.expenseList.reduce((prev, curr) => prev + curr.amount, 0);
  }

  calcBudgetValue() {
    return this.addIncomes() - this.addExpenses();
  }

  formatBudgetValue() {
    let budgetValue = this.calcBudgetValue();

    if (budgetValue < 0) {
      budgetValue *= -1;
      return `- $${budgetValue.toFixed(2)}`;
    } else if (budgetValue === 0) {
      return `$0.00`;
    } else {
      return `+ $${budgetValue.toFixed(2)}`;
    }
  }

  calcBudgetExpensesPercentage() {
    let pct = 100 * (this.addExpenses() / this.addIncomes());

    if (Number.isNaN(pct) || !Number.isFinite(pct)) pct = 0;

    return Math.round(pct);
  }
}

export default TransactionList;