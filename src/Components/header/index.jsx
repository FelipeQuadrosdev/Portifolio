
import { FaWhatsapp, FaLinkedin, } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import curriculo from "../../photo/Curriculo.pdf"
import "./header.css"

export default function Header() {
    return (
        <header className="header">
            <div className="header_content">

                <ul className="header_ul">
                    <li> <a href="#main" className="a">Sobre mim</a></li>
                    <li> <a href="#skills" className="a">Habilidades</a></li>
                    <li> <a href="#projetos" className="a">Projetos</a></li>
                    <li> <a href={curriculo} download='curriculo' className="a" id="#ab">CV</a></li>
                </ul>
                <div className="headerbuttons">
                    <a className="linckhedaer" target="black" rel="external" href="https://contate.me/desenvolverfront" ><FaWhatsapp size={40} color="#09f635" className="icone" /></a>
                    <a className="linckhedaer" target="black" rel="external" href="https://www.linkedin.com/in/felipe-de-quadros-gomes-b990012aa/"><FaLinkedin size={40} color="#4587e9" className="icone" /></a>
                    <a className="linckhedaer" target="black" rel="external" href="https://github.com/FelipeQuadrosdev"><IoLogoGithub size={40} color="#5966f4" className="icone" /></a>
                    <a className="linckhedaer" href="#footer"><MdOutgoingMail size={40} color="#6a5fff" className="icone" /></a>

                </div>
            </div>
        </header>
    )
}