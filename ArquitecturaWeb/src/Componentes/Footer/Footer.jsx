import "./Footer.css";
import { Link } from "react-router-dom";
import logohome from "../../assets/img/pie.jpg";

export function Footer() {
  return (
    <>
      <footer>
        <div className="container footer_container">
                <Link to="/">
                <img className="logos" src={logohome} alt="footer logo" />
                </Link>

                <article>

                <p className="texto">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
                    cupiditate blanditiis praesentium id tenetur sequi!
                </p>


                <div className="footer_socials">
                <a
                    className="light"
                    href="https://web.whatsapp.com/"
                    target="_blank"
                    rel="noreferrer noopener">
                    <i class="bi bi-whatsapp"></i>
                </a>
                <a
                    href="https://www.instagram.com/j.axisarquitectura/"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <i class="bi bi-instagram"></i>
                </a>
                <a
                    href="mailto:correodelapagina"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <i class="bi bi-envelope"></i>
                </a>
                </div>
          </article>

         

          <article>
            <h4>Enlaces Permanentes</h4>
            <Link to="/">Home</Link>
            <Link to="/About">Sobre Nosotros</Link>
            <Link to="/Servicios">Servicios</Link>
            <Link to="/Proyectos">Proyectos</Link>
            <Link to="/Contact">Contactanos</Link>
          </article>
        </div>
        <div className="footer_copyright">
          <small>
            2023 Sebastian Saldarriaga BTE &copy; All Rights Reserved
          </small>
        </div>
      </footer>
    </>
  );
}
