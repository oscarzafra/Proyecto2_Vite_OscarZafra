import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="home">
    <p>Descubre nuestra nueva gama</p>
    <h1>iPhone 16 Pro</h1>
    <p>El impresio­nante diseño del iPhone 16 Pro, fabricado en titanio de grado 5, estrena un nuevo acabado microgranallado, pulido hasta la perfección. Como el titanio es uno de los metales con mejor relación dureza‑peso, ambos modelos son increíblemente resistentes y ligeros. Se presentan en cuatro tonos espectaculares, incluido el nuevo titanio color desierto.</p>
    <a href="https://www.apple.com/es/contact/">Contacto →</a>
    </section>`;
};