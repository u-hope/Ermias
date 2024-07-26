import Header from './sections/header/header';
import Contact from './sections/Contact/Contact';
import './App.css'
import About from './sections/about/about';
import Service from './sections/services/service';
import Parallex from './sections/parallex/parallex';
import Experiences from './components/experiences/Experiences';

function App() {

  return (
    <div className='app'>
      <Header headerName='Ermias Alemayehu' headerMotto='Software Engineer, Digital Marketer, Website Designer and Developer'/>
      <About/>
      <Service/>
      <Parallex/>
      <Experiences/>
      <Contact/>
    </div>
  )
}

export default App
