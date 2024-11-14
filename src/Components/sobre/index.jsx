import "./sobre.css"
import photo13 from "../../photo/database-security.png"
import photo14 from "../../photo/computador.png"

export default function Sobre(){
    return(
        <article className="articleprincipal">
        <aside className="articleaside1">
          <h3 className="articleh3" ><img src={photo13} alt="Ícone do computador" className="imgIcon" />Front-end</h3>
          <p id="conteudo">Ofereço soluções web,Transformando designs em interfaces intuitivas e envolventes, garantindo a melhor experiência aos usuários.</p>
        </aside>

        <aside className="articleaside1">
          <h3 className="articleh3"><img src={photo14} alt="Ícone do database" className="imgIcon" />DataBases</h3>
          <p id="conteudo">Utilizando NoSQL,Como Firebase e MongoDB,Tenho SQL Académico como mysql e oracle.</p>
        </aside>
        
      </article>
      
    )
} 