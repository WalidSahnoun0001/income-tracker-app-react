import './total-income.css'

function TotalIncome({total}) {
  return (
    <section className='total'>
        <h2>Total Income</h2>
        <div>{total}</div>
    </section>
  )
}

export default TotalIncome