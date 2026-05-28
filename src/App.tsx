import './App.css'
import {Card} from "./components/Card"
// aqui importar o hook dos dados da API
import { useCarData } from "./hooks/useCarData";
function App() {
  // o elemento escrito em chaves eh o unico acessado
  const { data } =  useCarData();

  return(
  <div className="container mt-8">
    <div className="header">
      <h1 className="text-5xl font-bold">Car List</h1>
    </div>
    <div className="car-grid">
      {data?.map(car => <Card
      key={car.id}
      title={car.carName}
      specs={car.carSpecs}
      />)}
    </div>
  </div>
  )
}

export default App
