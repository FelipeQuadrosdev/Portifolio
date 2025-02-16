import "./main.css";
import photo from "../../photo/felipe.jpg";

export default function Main() {
    return (
        <main className="main-container" id="main">
            <section className="profile-section">
                <div className="profile-image-container">
                    <img src={photo} alt="Perfil de Felipe" />
                </div>

                <div className="description-container">
                    <div className="name-container">
                        <ul className="name-list">
                            <li className="name-item">Olá, eu sou</li>
                            <li className="name-item">Felipe Quadros</li>
                            <li className="name-item"><p>Eu sou um</p><span className="animated-text"></span></li>
                        </ul>
                    </div>
                    <p className="description-text">
                        Estou em uma jornada de 3 anos aprimorando minhas habilidades. Sou motivado e versátil, sempre pronto para novos desafios e dedicado a entregar alta qualidade.
                        Com uma mentalidade de crescimento, estou preparado para impulsionar seu negócio.
                        Busco constantemente aprimorar meus conhecimentos e minhas habilidades, sempre buscando as melhores práticas de desenvolvimento.
                        Tenho um interesse genuíno em atuar tanto no frontend quanto no backend,
                        com o objetivo de contribuir de forma abrangente para o desenvolvimento de sistemas funcionais e escaláveis.
                        Estou motivado a integrar uma equipe onde possa não apenas aplicar meus conhecimentos, mas também aprender e
                        colaborar para o crescimento mútuo.
                    </p>
                </div>
            </section>
        </main>
    );
}
