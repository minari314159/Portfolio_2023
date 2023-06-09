import {BrowserRouter} from 'react-router-dom';

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas} from './components';

const App = () =>{
  return (
    <BrowserRouter>
    <div className= "relative 2-0 bg-gradient-to-br from-red-100 to-slate-500">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Tech />
      <div className="relative z-0">
        <Works />
        <Contact />
        <StarsCanvas />
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
