import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const expenses = [
    {
      id: 1,
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2022, 3, 28)
    },
    {
      id: 2,
      title: 'Gas',
      amount: 100.00,
      date: new Date(2021, 8, 28)
    },
    {
      id: 3,
      title: 'Rent',
      amount: 1095.00,
      date: new Date(2021, 11, 28)
    },
    {
      id: 4,
      title: 'Coffee',
      amount: 24.50,
      date: new Date(2022, 1, 28)
    }
  ];

  const addExpenseHandler = (expense) => {
    console.log('In App.js');
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  )
};

export default App;
