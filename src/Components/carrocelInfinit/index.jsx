import "./carrocelInfinit.css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';

import photo1 from "../../photo/css.png"
import photo2 from "../../photo/firebase.png"
import photo3 from "../../photo/react.png"
import photo4 from "../../photo/html-5.png"
import photo5 from "../../photo/js.png"
import photo6 from "../../photo/styled-components.png"
import photo15 from "../../photo/typescript.svg"
import photo16 from "../../photo/git.png"
import photo17 from "../../photo/github.png"


export default function CarrocelInfinit() {


   const data = [
        { id: '1', imagem: photo5, nome: "Java-Scrip" },
        { id: '2', imagem: photo1, nome: "CSS" },
        { id: '3', imagem: photo2, nome: "Firebase" },
        { id: '4', imagem: photo3, nome: "React" },
        { id: '5', imagem: photo6, nome: "Styled-Components" },
        { id: '6', imagem: photo4, nome: "Html" },
        { id: '7', imagem: photo15, nome: "TypeScript" },
        { id: '8', imagem: photo16, nome: "Git" },
        { id: '9', imagem: photo17, nome: "GitHub" },
    ]


    return (
        <section className="slider">
            <Swiper
                slidesPerView={3}
                loop
                autoplay={{ delay: 600 }}
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id} className="slide-sub">
                        <ul className="slide_img_li">
                        <li> <img
                            src={item.imagem}
                            alt="Slider"
                            className="slide-item"
                        /></li>
                        <li className="slide-nome">{item.nome}</li>
                        </ul>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}