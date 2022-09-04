import './income-list.css'

function IncomeList({list, deleteRow}) {

  return (
    (list.length > 0) ? (
      <section className="income-list">
        {
          list.map((row)=> (
            <ul key={row.id}>
              <li>{row.fullname}</li>
              <li>{row.salary} $</li>
              <li>{row.date}</li>
              <li><span onClick={() => deleteRow(row.id)}>Delete</span></li>
            </ul>
          ))
        }
    </section>
    ): (
      <section className='nothing'>
        <h4>Nothing to show...</h4>
      </section>
    )
  )
}

export default IncomeList