import Terminal from './components/Terminal'
import InitView from './components/baseViews /MainView'
import AboutMeView from './components/baseViews /AboutMeView'
import StatusView  from './components/baseViews /StatusView'

function App() {
  return (
    <div className='w-full flex h-full font-mono'>
      <div className='w-full h-full p-2'>
        <Terminal className='h-full' initialView={InitView}/>
      </div>
      <div className='w-1/3 h-full p-2 hidden lg:inline'>
        <div className='h-1/2'>
            <Terminal initialView={AboutMeView}></Terminal>
        </div>
        <div className='h-1/2 pt-2'>
          <Terminal initialView={StatusView}/>
        </div>
      </div>
    </div>
  )
}

export default App
