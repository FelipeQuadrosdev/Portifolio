import "../header/header.css"

import photo from "../photo/felipe.jpg"
export default function Header() {

    return (
        <header className="titulo">
            <p className="descricao"> <i> <a id="profissao">Desenvolvedor, FRONT-END</a> <br /> <a id="nome">FELIPE <br />QUADROS GOMES</a></i><br />Com foco em Frontend e uma jornada de 2 anos aprimorando habilidades em <strong>HTML,
                CSS e JavaScript, React, React Native, Firebase ,Git, GitHub, Typescript, Cursando Bacharelado Sistema da Informação,Cursinho FullStackPro </strong> busco integrar uma equipe de desenvolvimento onde possa aplicar minhas competências técnicas.
                Meu objetivo é criar interfaces intuitivas e experiências de usuário envolventes, alavancando boas práticas de design para desenvolver soluções eficientes e acessíveis.
                Estou sempre buscando aprender, evoluir e contribuir para projetos que desafiem minha capacidade.</p>

            <div className="minha-imagem">
                <img
                    src={photo}
                />
            </div>
        </header>
        
    )
}