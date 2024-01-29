import './App.css';
import Featuresdata from './components/Featuresdata';
import{title} from './data/Data'
// import Logo from './Logo';


import Navbar from './components/Navbar';
import Hero_section from './components/Hero_section';
import Metrices from './components/Metrices';
import Testmonials from './components/Testmonials';

function App() {
  return (
    <>
  <Navbar/>
   <Hero_section/>

<Featuresdata/>
<Metrices Data={title}/>
<Testmonials/>


     
    </>
  );
}

export default App;
