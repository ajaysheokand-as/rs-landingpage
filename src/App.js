import './App.css';
import Featuresdata from './components/Featuresdata';
import{title} from './data/Data'
import{Pricingdata}from './data/Data'
// import Logo from './Logo';


import Navbar from './components/Navbar';
import Hero_section from './components/Hero_section';
import Logo from './components/Logo';
import Highlighted from './components/Highlighted';
import Metrices from './components/Metrices';
import Testmonials from './components/Testmonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Pricing from './components/Pricing';
import Team from './components/Team';
function App() {
  return (
    <>
      <Navbar />
      <Hero_section />
      <Logo />
      <Featuresdata />
      <Highlighted/>
 

<Featuresdata/>
<Metrices Data={title}/>
<Pricing data ={Pricingdata}/> 
<Team/>
<Testmonials/>

<Contact/>
<Footer/>
      
      {/*  */}
      


    </>
  );
}

export default App;
