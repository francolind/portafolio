import {Header} from './component/Header.jsx';
import { Main }  from './component/Main';
import { Skills }  from './component/Skills';
import { Portfolio }  from './component/Portfolio';
import { Contact }  from './component/Contact';
import { Footer } from './component/Footer';
import './App.css'

function App() {


  return (
    <div className="App">
        <Header/>
        <Main/>
        <Skills/>
        <Portfolio/>
        <Contact/>
        <Footer/>

    </div>
  )
}

export default App
