import "./header.css"
import photo10 from "../../photo/whatsapp.png"
import photo11 from "../../photo/github.png"
import photo12 from "../../photo/linkedin.png"
import photo from "../../photo/felipe.jpg"

export default function Header() {

    return (
        <header className="titulo">

            <div className="headerbuttons">
                <a className="linckhedaer" target="black" rel="external" href="https://contate.me/desenvolverfront" ><img src={photo10} alt="Ícone" className="imgIcone" /></a>
                <a className="linckhedaer" target="black" rel="external" href="https://www.linkedin.com/in/felipe-de-quadros-gomes-b990012aa/"><img src={photo12} alt="Ícone" className="imgIcone" /></a>
                <a className="linckhedaer" target="black" rel="external" href="https://github.com/FelipeQuadrosdev"><img src={photo11} alt="Ícone" className="imgIcone" /></a>

            </div>
            <i id="profissao">Desenvolvedor, FRONT-END</i> <br /> <p id="nome">FELIPE <br />QUADROS GOMES</p><br />

            <div className="titulo_p">

                <p className="descricao">Com foco em Frontend e uma jornada de 3 anos aprimorando habilidades em <strong> HTML,
                    CSS e JavaScript, Next, React, React Native, Firebase ,Git, GitHub, Typescript, NoSql, Sql Cursando Bacharelado Sistema da Informação,Cursinho FullStackPro. </strong>
                    Busco constantemente aprimorar meus conhecimentos e minhas habilidades, sempre buscando as melhores práticas de desenvolvimento. 
                     Sou uma pessoa proativa, com forte senso de responsabilidade e comprometida com a qualidade do meu trabalho. 
                    Tenho facilidade de trabalhar em equipe e estou sempre disposta a aprender coisas novas.</p>
            </div>
            <div className="div_imagem_perfil">
                <img
                    src={photo}
                    alt="minha foto do Perfil,prazer Felipe"
                />
            </div>
        </header>

    )
}