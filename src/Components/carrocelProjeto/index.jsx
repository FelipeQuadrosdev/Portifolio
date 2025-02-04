import { useEffect, useState } from "react";

import "./carrocelProjeto.css"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Swiper, SwiperSlide } from 'swiper/react';

import photo7 from "../../photo/prime flix.jpg"
import photo8 from "../../photo/foto2tarefa.jpg"
import photo9 from "../../photo/linkeTry.png"

import react from "../../icons/1174949_js_react js_logo_react_react native_icon.png"
import typescriptt from "../../icons/TypeScript.png"
import firebase from "../../icons/firebase.png"
import js from "../../icons/js.png"
import route from "../../icons/react-router.png"
import tailwind from "../../icons/tailwind.png"
import next from "../../icons/nextjs.256x256.png"



export default function CarrocelProjeto() {
    const [sliderPerView, setSlidePerView] = useState(3);
    const capa = [
        { id: 1, imagem: photo7, titulo: "Filmes em Cartaz", alt: "Foto dos Filme em Cartaz", descricao: "Este projeto foi desenvolvido para acompanhar filmes em cartaz, com o objetivo de aprimorar a lógica de programação e consumir APIs de forma eficiente.", deployurl: " https://filme-cartaz.netlify.app", githuburl: "https://github.com/FelipeQuadrosdev/Filmes_Cartaz.git", tecnologicas: [react, js, typescriptt,], },
        { id: 2, imagem: photo8, titulo: "Projeto Tarefas", alt: "Foto das Criptomoedas", descricao: "Um sistema intuitivo para organizar suas tarefas e estudos. Permite compartilhar tarefas com amigos, receber comentários e definir a visibilidade como pública ou privada. Ideal para manter suas atividades organizadas e colaborar com outras pessoas de forma eficiente.", deployurl: "https://tarefas-topaz.vercel.app/", githuburl: "https://github.com/FelipeQuadrosdev/Tarefas", tecnologicas: [next, js, typescriptt, firebase], },
        { id: 3, imagem: photo9, titulo: "LinkeTry", alt: "Foto do linketry armzezar seus site", descricao: "Sistema para armazenar, modificar e centralizar todas as suas redes sociais e sites em um único lugar. Utilizamos diversas tecnologias para garantir um desempenho eficiente e uma experiência de usuário agradável. Permitindo a criação de contas e login de forma segura. Privamos as rotas, só acessando /admin,quem efetuou login.Criamos page de error causo usuário acesse alguma pagina que não existe.", deployurl: "https://devlinke-try.vercel.app/login", githuburl: "https://github.com/FelipeQuadrosdev/LinkeTry", tecnologicas: [react, js, typescriptt, route, tailwind, firebase], },

    ]


    useEffect(() => {

        function handleResize() {
            if (window.innerWidth < 1000) {
                setSlidePerView(1);
            } else {
                setSlidePerView(2);
            }
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [])
    return (
        <aside className="divcontainer">
            <div className="projetos">
                <h2 ><span className="h2-one">Meus, </span>
                    <span className="h2-two">Projetos!</span>
                </h2>
            </div>
            <Swiper
                slidesPerView={sliderPerView}
                loop
                navigation
                pagination={{ clickable: true, el: '.swiper-pagination-custom' }}
                className="swiper"
            >
                {capa.map((item) => (
                    <SwiperSlide key={item.id} className="slide">
                        <div className="containerimagem">
                            <img
                                src={item.imagem}
                                alt={item.alt}
                                className="imagemProjeto"
                            />
                            <div className="content">
                                <h4 className="h4-titulo">{item.titulo}</h4>
                                <h5 className="descricaoProjeto">{item.descricao}</h5>

                                <div className="icones">
                                    {item.tecnologicas.map((icone) => (
                                       
                                        <img  key={icone} src={icone} alt="Ícone de tecnologia" className="icone" />
                                        
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="Buttonprojeto">

                            <a href={item.deployurl} target="black" type="button" className="button-linck" >
                                <button type="button" className="button" >Deploy</button>
                            </a>
                            <a href={item.githuburl} target="black" type="button" className="button-linck"  >
                                <button type="button" className="button">GitHub</button>
                            </a>

                        </div>

                    </SwiperSlide>

                ))}

            </Swiper>

        </aside>
    )
}
