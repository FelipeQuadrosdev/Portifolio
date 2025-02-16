import { FcApproval, FcOk } from "react-icons/fc";
import {
    SiStyledcomponents,
    SiJavascript,
    SiTypescript,
    SiTailwindcss,
    SiReact,
    SiFirebase,
    SiHtml5,
    SiNextdotjs,
    SiGithub,
    SiGit,
    SiCss3,
    SiMysql,
} from "react-icons/si";
import "./descricao.css"

export default function Descricao() {
    return (
        <section className="skills-section" id="skills">
            <article className="skills-article">

                <div className="soft-skills">
                    <div className="header-icon">
                        <FcApproval size={30} />
                        <h2>Cursando Profissionalizante</h2>
                    </div>
                    <div className="skills-container">
                        <ul className="education-list">
                            <li className="education-item">

                                <p><FcOk />FullStackPro | Fábrica de Aplicativo</p>
                            </li>

                            <span className="description">
                                Durante o curso, aprendi diversas tecnologias FullStackPro e Fábrica onde aperfeiçoei minhas habilidades.
                                Participei de projetos reais, desenvolvendo lógica de programação, algoritmos e requisitos usando ferramentas como Notion e fluxogramas.
                                Criamos um sistema de controle de tarefas com Next.js, utilizando SSG e SSR para otimizar buscas de API e manter dados atualizados.
                                Implementamos autenticação com NextAuth e Google, armazenamos dados no Firebase, e fizemos deploy na Vercel via GitHub.
                                Esses projetos proporcionaram um aprendizado valioso em tecnologias modernas e práticas de desenvolvimento.
                            </span>

                        </ul>
                    </div>
                </div>
                <div className="soft-skills">
                    <div className="header-icon">
                        <FcApproval size={30} />
                        <h2>Formação Acadêmica</h2>
                    </div>

                    <div className="skills-container ">
                        <ul className="education-list">
                            <li className="education-item">
                                <p><FcOk />Universidade Nove de Julho</p>
                            </li>
                            <li className="education-item">
                                <p><FcOk />Bacharel: Sistema da Informação 12/25</p>
                            </li>

                            <span className="description">
                                Participamos de diversos trabalhos em grupo, incluindo a criação de um aplicativo de finanças usando React Native e Firebase.
                                Aprendi bastante sobre build e funcionalidades em tempo real.
                                Também desenvolvemos um site de doação de animais, utilizando JavaScript, CSS e HTML,
                                que conectava doadores e interessados por meio do WhatsApp.
                                Esses projetos acadêmicos proporcionaram um aprendizado valioso em tecnologia e colaboração.
                            </span>
                        </ul>

                    </div>
                </div>

                <div className="soft-skills">
                    <div className="header-icon">
                        <FcApproval size={30} />
                        <h2>Soft Skills</h2>
                    </div>
                    <div className="skills-container">
                        <ul className="skills-liste">
                            <li className="skill-item">
                                <FcOk />
                                <span>Trabalho em equipe</span>
                            </li>
                            <li className="skill-item">
                                <FcOk />
                                <span>Versionamento de Código</span>
                            </li>
                            <li className="skill-item">
                                <FcOk />
                                <span>Comunicação</span>
                            </li>
                            <li className="skill-item">
                                <FcOk />
                                <span>Organização</span>
                            </li>
                            <li className="skill-item">
                                <FcOk />
                                <span>Aprendizado Contínuo</span>
                            </li>
                            <li className="skill-item">
                                <FcOk />
                                <span>Adaptabilidade</span>
                            </li>

                        </ul>

                        <ul className="skills-liste">
                            <li className="skill-item">
                                <FcOk />
                                <span>Criatividade</span>
                            </li>
                            <li className="skill-item">
                                <FcOk />
                                <span>Proatividade</span>
                            </li>
                            <li className="skill-item">
                                <FcOk />
                                <span>Capacidade autodidata</span>
                            </li>
                            <li className="skill-item">
                                <FcOk />
                                <span>Responsabilidade</span>
                            </li>
                            <li className="skill-item">
                                <FcOk />
                                <span>Ética e Integridade</span>
                            </li>
                            <li className="skill-item">
                                <FcOk />
                                <span>Resolução de Problemas</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="hard-skills">
                    <div className="header-icon">
                        <FcApproval size={30} />
                        <h2>Hard Skills</h2>
                    </div>
                    <div className="skills-container">
                        <ul className="skills-list">
                            <li className="skill-item">
                                <SiHtml5 size={30} color="#ff5900" />
                                <span>HTML5</span>
                            </li>
                            <li className="skill-item">
                                <SiCss3 size={30} color="#2237f5" />
                                <span>CSS3</span>
                            </li>
                            <li className="skill-item">

                                <SiJavascript size={30} color="#d8d217" />
                                <span>JavaScript</span>
                            </li>
                            <li className="skill-item">
                                <SiTypescript size={30} color="#296fd8" />
                                <span>Typescript</span>
                            </li>
                            <li className="skill-item">
                                <SiNextdotjs size={30} color="#000" />
                                <span>Next.js</span>
                            </li>
                            <li className="skill-item">
                                <SiReact size={30} color="#5885ff" />
                                <span>React</span>
                            </li>
                        </ul>
                        <ul className="skills-list">
                            <li className="skill-item">
                                <SiStyledcomponents size={30} color="#e614b5" />
                                <span>Styled-components</span>
                            </li>
                            <li className="skill-item">
                                <SiTailwindcss size={30} color="#01b3ff" />
                                <span>Tailwindcss</span>
                            </li>

                            <li className="skill-item">
                                <SiFirebase size={30} color="#b2a83d" />
                                <span>Firebase</span>
                            </li>
                            <li className="skill-item">
                                <SiMysql size={35} color="#00144b" />
                                <span>Mysql</span>
                            </li>
                            <li className="skill-item">
                                <SiGit size={40} color="#eb8911" />
                                <span>Git</span>
                            </li>
                            <li className="skill-item">
                                <SiGithub size={30} color="#006eff" />
                                <span>GitHub</span>
                            </li>


                        </ul>
                    </div>




                </div>
            </article>
        </section>
    );
}
