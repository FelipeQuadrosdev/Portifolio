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
                        Busco uma oportunidade como Desenvolvedor Front-End para aplicar minhas
                        competências técnicas, aprimoradas ao longo de 3 anos de estudos e prática com
                        HTML, CSS, JavaScript, TypeScript e frameworks como Next, React e React Native.
                        Almejo, no futuro, atuar como Desenvolvedor FullStack. Tenho como foco criar
                        interfaces intuitivas e experiências de usuário envolventes, aplicando boas práticas de
                        design para desenvolver soluções eficientes e acessíveis. Estou sempre em busca de
                        aprendizado, evolução profissional e de contribuir com projetos desafiadores,
                        oferecendo soluções práticas e eficientes para as demandas da empresa.
                    </p>
                </div>
            </section>
        </main>
    );
}
