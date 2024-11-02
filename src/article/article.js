import "../article/article.css"
import photo13 from "../photo/database-security.png"
import photo14 from "../photo/computador.png"

export default function Article(){
    return(
        <article className="articleprincipal">
        <aside className="articleaside1">
          <h3 className="articleh3" ><img src={photo13} alt="Ícone" className="imgIcon" />Front-end</h3>
          <p id="conteudo">Ofereço soluções web,Transformando designs em interfaces intuitivas e envolventes, garantindo a melhor experiência aos usuários.</p>
        </aside>

        <aside className="articleaside1">
          <h3 className="articleh3"><img src={photo14} alt="Ícone" className="imgIcon" />DataBases</h3>
          <p id="conteudo">Utilização NoSQL,Como Firebase e MongoDB,Tenho SQL Académico.</p>
        </aside>
        
      </article>
      
    )
}