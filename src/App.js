import './App.css';
import Featuresdata from './components/Featuresdata';
import{title} from './data/Data'
// import Logo from './Logo';


import Navbar from './components/Navbar';
import Hero_section from './components/Hero_section';
import Logo from './components/Logo';
import Highlighted from './components/Highlighted';
import Metrices from './components/Metrices';
import Testmonials from './components/Testmonials';
import Pricing from './components/Pricing';
import { Pricingdata } from './data/Data';
import Team from './components/Team';

function App() {
  return (
    <>
      <Navbar />
      <Hero_section />
      <Logo />
      <Featuresdata />
      <Highlighted/>
      
      <Pricing data ={Pricingdata}/>
      <Team/>



    </>
  );
}

export default App;
