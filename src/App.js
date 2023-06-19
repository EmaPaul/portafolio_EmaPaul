import React, {useState,useEffect} from 'react';
import './App.css';
import About from './components/about/About';
import Cover from './components/cover/Cover';
import Footer from './components/footer/Footer';
import Info from './components/info/Info';
import Navbar from './components/navbar/Navbar';
import SliderProyect from './components/sliderProyect/SliderProyect';
import SliderSkils from './components/sliderSkils/SliderSkils';
// estuve aqui!!
function App() {
  const [scrollHeight,setScrollheight] = useState(0);

  function handleScroll(){
    const position = window.pageYOffset;
    setScrollheight(position)
  }

  useEffect(()=>{
    window.addEventListener('scroll',handleScroll)
  },[scrollHeight])

  return(
  <div className="App">
    <Navbar isScrolling={scrollHeight}/>
    <Cover/>
    <About/>
    <SliderSkils/>
    <SliderProyect/>
    <Info/>
    <Footer/>
  </div>
  );
}

export default App;
