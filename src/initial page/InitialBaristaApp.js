import { Link } from "react-router-dom"
import './initial.css'

const InitialBaristaApp = () => {
  return (
    <div>
      <h2>Kamu Mau Lihat Apa Hari Ini?</h2>
      <div className='choices-container'>
        <Link to='/history'>
          <div className='barista-choice'>
          <h1>History</h1>
           
          </div>
        </Link>
        <Link to='/order'>
          <div className='barista-choice' >
          <h1> Order</h1>
        
          </div>
        </Link>
      </div>

    </div>
  )
}


export default InitialBaristaApp