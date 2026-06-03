import { Navbar } from "./layout/Navbar";
import { Footer } from './layout/Footer';
import { Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import Experience from "./pages/ExperienceShow";
import CarShow from "./pages/CarShow";
import UserShow from "./pages/UserShow";

function App() {
  // o elemento escrito em chaves eh o unico acessado

  return(
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="pt-24">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/car/:id" element={<CarShow />} />
          <Route path="/user/:id" element={<UserShow />} />
          <Route path="/experience/:id" element={<Experience />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
