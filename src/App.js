import {useEffect, useState} from 'react';
import './App.css';
import AddIncome from './Components/AddIncome/AddIncome';
import IncomeList from './Components/IncomeList/IncomeList';
import TotalIncome from './Components/TotalIncome/TotalIncome';

function App() {

  const [list, setList] = useState([])
  const [total, setTotal] = useState(null)

  const deleteRow = (rowId) => {
    const newlist = list.filter((row) => row.id !== rowId)
    setList(newlist)
  }

  useEffect(()=> {
    let res = 0
    for(let i = 0; i < list.length; i++) {
      res += list[i].salary
    }
    setTotal(res)
  }, [list])

  return (
    <div className="income-tracker-app">
      <TotalIncome total={total} />
      <AddIncome setList={setList} list={list} />
      <IncomeList list={list} deleteRow={deleteRow} />
    </div>
  );
}

export default App;
