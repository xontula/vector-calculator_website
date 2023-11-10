import './css/App.css'
import { Navbar } from './components/navbar'
import { BaseTable } from './components/tables'

export function App() {
  return (
  <>
    <div className="center-content">
        <Navbar/>
    </div>

    <div className="center-content">
        <BaseTable/>
    </div>
  </>
  )
}
