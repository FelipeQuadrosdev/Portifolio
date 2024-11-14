import "./style.css"
import Header from "./Components/header"
import SobreMim from "./Components/sobremim";
import CarrocelInfinit from "./Components/carrocelInfinit";
import Descricao from "./Components/descricao";
import Sobre from "./Components/sobre";
import CarrocelProjeto from "./Components/carrocelProjeto";
import Contato from "./Components/contato";


export default function App() {

  return (
    <div className="container">

      <Header />
      <SobreMim />
      <Descricao />
      <Sobre />
      <CarrocelProjeto />
      <CarrocelInfinit />
      <Contato />

    </div>
  );

}
