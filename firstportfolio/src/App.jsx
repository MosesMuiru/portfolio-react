
import './App.css'
import Navbar from './components/Navbar'
import Analytics from './components/Analytics'
import Haro from './components/Haro'
import Newsletter from './components/Newsletter'
import Cards from './components/Cards'


function App() {
  

  return (
    <div className="App">
       <Navbar/>
       <Haro/>
       <Analytics/>
       <Newsletter/>
       <Cards/>

    </div>
  )
}

export default App
