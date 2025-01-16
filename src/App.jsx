import './App.css'
import Terminal from './components/Terminal'


function App() {
  return (
    <div className='main-grid'>
      <div className='main-info'>
        <Terminal />
      </div>
      <div className='user-info'>
        <Terminal />
      </div>
    </div>
  )
}

export default App
