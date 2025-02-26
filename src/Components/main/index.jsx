import "./main.css";
import photo from "../../photo/felipe.JPG";

export default function Main() {
    return (
        <main className="main-container" id="main">
            <section className="profile-section">
                <div className="profile-image-container">
                    <img src={photo} alt="Perfil de Felipe" />
                </div>git

                <div className="description-container">
                    <div className="name-container">
                        <ul className="name-list">
                            <li className="name-item">Olá, eu sou</li>
                            <li className="name-item">Felipe Quadros</li>
                            <li className="name-item"><p>Eu sou um</p><span className="animated-text"></span></li>
                        </ul>
                    </div>
                    <p className="description-text">
                        Proativo desenvolvedor Front-end e Web com experiência prática em desenvolvimento de
                        sistemas, utilizando tecnologias modernas como Next.js, JavaScript ,TypeScript e Firebase.
                        Em projetos pessoais, criei um sistema intuitivo para organização de tarefas, demonstrando
                        habilidades em liderança de projeto e atenção ao usuário. A formação em Sistemas da
                        Informação complementa a expertise técnica, oferecendo uma base sólida para atender às
                        necessidades de empresas inovadoras. Pronto para agregar valor ao time com soluções
                        criativas e eficientes.
                    </p>
                </div>
            </section>
        </main>
    );
}
