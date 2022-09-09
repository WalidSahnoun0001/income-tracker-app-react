import { useRef } from 'react'
import './add-income.css'

function AddIncome({list, setList}) {


  const fullName = useRef('')
  const salary = useRef(0)
  const date = useRef('')

  const addOne = () => {
    if(fullName.current.value !== '' && salary.current.value !== '') {
      setList([
        ...list, {
          "id": Date.now().toString(),
          "fullname": fullName.current.value,
          "salary": Number(salary.current.value),
          "date": date.current.value
        }
      ])
      fullName.current.value = ''
      salary.current.value = ''
      date.current.value = ''
    }
  }

  return (
    <section className='add-income'>
        <input type="text" placeholder='Full Name...' ref={fullName}/>
        <input type="number" placeholder='Salary' ref={salary} />
        <input type="date" ref={date} />
          <button onClick={addOne}>Add</button>
    </section>
  )
}

export default AddIncome