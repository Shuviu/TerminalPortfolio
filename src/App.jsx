
import AboutMe from './components/AboutMe'
import Terminal from './components/Terminal'
import Status from './components/Status'

function App() {
  return (
    <div className='w-full flex h-full'>
      <div className='w-full h-full p-2'>
        <Terminal className='h-full' />
      </div>
      <div className='w-1/3 h-full p-2 hidden lg:inline'>
        <div className='h-1/2'>
          <AboutMe />
        </div>
        <div className='h-1/2 pt-2'>
          <Status />
        </div>
      </div>
    </div>
  )
}

export default App
