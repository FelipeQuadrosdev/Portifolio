import "./style.css"
import Header from "./Components/header";
import Main from "./Components/main"
import Descricao from "./Components/descricao";
import CarrocelProjeto from "./Components/carrocelProjeto";
import Contato from "./Components/contato";


export default function App() {

  return (
    <div className="container">
      <Header />
      <Main />
      <Descricao />
      <CarrocelProjeto />
      <Contato />

    </div>
  );

}
