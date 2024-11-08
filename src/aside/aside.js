import "../aside/aside.css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import photo7 from "../photo/prime flix.jpg"
import photo8 from "../photo/Critpo.jpg"
import photo9 from "../photo/fotocurriculo.jpg"

export default function Aside() {
    const [sliderPerView, setSlidePerView] = useState(3);
    const capa = [
        { id: 1, imagem: photo7, titulo: "Filmes em Cartaz", alt:"Foto dos Filme em Cartaz", descricao: "Projeto criado para ver os filmes em cartaz, consumindo API com Axios, usando controle de rotas com React Router DOM e a biblioteca React-Toastify para animações com botões e React para a interface do usuário.", deployurl: " https://filme-cartaz.netlify.app", githuburl: "https://github.com/FelipeQuadrosdev/Filmes_Cartaz.git" },
        { id: 2, imagem: photo8, titulo: "Web Criptomoedas", alt:"Foto das Criptomoedas",descricao: "Projeto criado para monitorar criptomoedas com o objetivo de aprimorar minha lógica de programação. Utiliza APIs para consumir dados, TypeScript para tipar as entradas de dados da API, a biblioteca React para a interface do usuário e Vite para configurar o ambiente de desenvolvimento com TypeScript e fetch nativo para consumir a API.", deployurl: "https://webcriptmoeda.netlify.app", githuburl: "https://github.com/FelipeQuadrosdev/Werbisite_Criptomoedas/tree/main" },
        { id: 3, imagem: photo9, titulo: "Portfólio", alt:"Foto do Portfólio", descricao: "Portifolio criado em React para poder falar mais sobre meu trabalho, quais ferramentas eu utilizo, ter informações de contatos expondo minhas redes socias como GitHub e linkedin, emails e whatsApp e para falar um pouco mais sobre mim.", deployurl: "https://portifolio-91ka-git-main-felipequadrosdevs-projects.vercel.app/", githuburl: "https://github.com/FelipeQuadrosdev/Portifolio" },

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