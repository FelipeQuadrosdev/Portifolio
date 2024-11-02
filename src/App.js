import "./style.css"
import Header from "./header/header"
import Section from "./section/section";
import Section2 from "./section2/section2";
import Main from "./main/main";
import Article from "./article/article";
import Aside from "./aside/aside";
import Footer from "./footer/footer";


export default function App() {

  return (
    <div className="container">

      <Header />
      <Section />
      <Main />
      <Article />
      <Aside />
      <Section2 />
      <Footer />

    </div>
  );

}
