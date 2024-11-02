import { useState } from "react"
import "../footer/footer.css"
import photo10 from "../photo/whatsapp.png"
import photo11 from "../photo/github.png"
import photo12 from "../photo/linkedin.png"
import emailJs from "@emailjs/browser"

export default function Footer() {
    const [nome, setNome] = useState("");
    const [email, SetEmail] = useState("");
    const [mensagem, setMensagem] = useState("");

    function EnviarEmail(e) {
        e.preventDefault();
        if (nome === "" || email === "" || mensagem === '') {
            alert("Por Favor, Preencha Todos os Campos!")
            return;
        }
        const templateParams = {
            from_name: nome,
            email: email,
            mensagem: mensagem
        }
        emailJs.send("service_dcbs61u", "template_0a782ap", templateParams, "UC72d8DvVtGYCiqch")
            .then((response) => {
                console.log("Email Enviado", response.status, response.text)
                setNome("")
                SetEmail("")
                setMensagem("")
            })
            .catch((error) => { console.log("Erro ao Enviar o Email:", error) })
    }

    return (

        <footer className="foterprincipal" style={{ backgroundImage: `url()` }}>
            <form className="fotersub1" onSubmit={EnviarEmail}>
                <input
                    className="input"
                    placeholder="Digite seu Nome..."
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />

                <input
                    className="input"
                    type="text"
                    value={email}
                    placeholder="Digite seu Email..."
                    onChange={(e) => SetEmail(e.target.value)}
                />

                <textarea
                    className="mensagem"
                    placeholder="Digite sua Mensagem..."
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                />

                <button className="buttonEnviarForm" type="submit" value="Enviar">Enviar</button>
            </form>

            <div className="fotersub2">

                <h2 className="footerh2">Envie uma Mensagem</h2>
                <p id="foterenvie">Fique a vontade para entrar em contato comigo atraves de umas das minhas redes sociais ou<br />
                    me enviando um e-mail preenchendo os campos ao lado</p><br /><br />

                <div className="divbuttons">
                    <a className="linck" target="black" rel="external" href="https://contate.me/desenvolverfront" ><img src={photo10} alt="Ícone" className="imgIcone" /></a>
                    <a className="linck" target="black" rel="external" href="https://www.linkedin.com/in/felipe-de-quadros-gomes-b990012aa/"><img src={photo12} alt="Ícone" className="imgIcone" /></a>
                    <a className="linck" target="black" rel="external" href="https://github.com/FelipeQuadrosdev"><img src={photo11} alt="Ícone" className="imgIcone" /></a>
                </div>

            </div>

        </footer>
    )
}