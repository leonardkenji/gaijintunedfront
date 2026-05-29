import './App.css'
import { Hero } from "./sections/Hero";
import { Cars } from "./sections/Cars";
import { Experiences } from "./sections/Experiences";
import { AboutUs } from "./sections/AboutUs";
// aqui importar o hook dos dados da API
import { Navbar } from "./layout/Navbar";
function App() {
  // o elemento escrito em chaves eh o unico acessado

  return(
  <div className="min-h-screen overflow-x-hidden">
    <Navbar />
    <main className="pt-24">
      <Hero />
      <Cars />
      <Experiences />
      <AboutUs />
    </main>
  </div>
  )
}

export default App
