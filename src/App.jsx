import {BrowserRouter} from 'react-router-dom';

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas} from './components';

const App = () =>{
  return (
    <BrowserRouter>
    <div className= "relative 2-0 bg-primary">
    <Navbar />
      <div >
        <Hero />
      </div>
      <div className="relative z-0">
        <About />
       <Experience />
        <Tech />
        <Works />
        <Contact />
        <StarsCanvas />
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
