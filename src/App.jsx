
import Terminal from './components/Terminal'

function App() {
  return (
    <div className='w-full flex h-full'>
      <div className='w-full h-full p-2'>
        <Terminal className='h-full' />
      </div>
      <div className='w-1/3 h-full p-2'>
        <div className='h-1/2'>
          <Terminal />
        </div>
        <div className='h-1/2 pt-2'>
          <Terminal/>
        </div>
      </div>
    </div>
  )
}

export default App
