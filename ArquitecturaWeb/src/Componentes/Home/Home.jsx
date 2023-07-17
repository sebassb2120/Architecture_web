import "./Home.css";
import "animate.css";
import { Link } from "react-router-dom";
import Image from "../../assets/img/foto-casa.png";
import img1 from "../../assets/img/homeimg1.jpg";
import img2 from "../../assets/img/homeimg2.jpg";
import img33 from "../../assets/img/homeimg333.jpg";
import logohome from "../../assets/img/pie.jpg";

export function Home() {
  return (
    <>
      <header className="main_header">
        <div className="container main_header-container">
          <div className="main_header-left">
            <h4>J-AXIS</h4>
            <h1>El despertar de la vida en un plano.</h1>
            <p>
              MI PRIORIDAD ES CONCENTRARME EN AQUELLO QUE MEJORE LA CALIDAD DE
              VIDA DE LAS PERSONAS, QUE LAS HAGA ESTAR MÁS SANAS Y SER MÁS
              FELICES
            </p>
            <Link to="/Servicios" className="btn btn-warning lg">
              Our Services
            </Link>
          </div>
          <div className="main_header-right">
            <div className="main_header-circle"></div>
            <img src={Image} className="main_header-img" alt="Main Header Image" />
          </div>
        </div>
      </header>

      <section>
        <div className="container-fluid bg-dark fw-bold text-white text-center">
          <div className="images row justify-content-center">
            <div className="imagen col-12 col-md-3  wow animate__animated animate__backInLeft">
              <img
                src={img33}
                alt="s1"
                className="img-fluid w-100 rounded blancoNegro"
              />
              <h4 className="mt-2">Plano Vista 2D</h4>
            </div>

            <div className="imagen col-12 col-md-3 mt-5 animate__animated animate__backInDown">
              <img
                src={img2}
                alt="s1"
                className="img-fluid w-100 rounded blancoNegro"
              />
              <h4 className="mt-2">Plano Vista 3D</h4>
            </div>

            <div className="imagen col-12 col-md-3 animate__animated animate__backInRight">
              <img
                src={img1}
                alt="s1"
                className="img-fluid w-100 rounded blancoNegro"
              />
              <h4 className="mt-2">Resultado final</h4>
            </div>
          </div>
        </div>
      </section>

      <section id="little_abot ">
        <h1 className="mt-5">¿Quienes Somos?</h1>

        <div className="little_about_container mt-5">
          <div className="littleabout">
            <div className="littleabout_img">
              <img src={logohome} alt="" />
            </div>
          </div>

          <div className="littleabout_content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              officia eveniet aliquid? Praesentium recusandae eum accusantium
              illum natus delectus at, pariatur, unde repellat, tenetur quas
              maxime architecto! Officiis corporis facilis consectetur
              repudiandae deleniti, veritatis vero consequatur assumenda.
              Voluptatem illo impedit veniam assumenda. Molestiae minima
              nesciunt eaque in dolorem impedit ullam.
            </p>
          </div>
        </div>
      </section>


      <section className="socials_media">
        <h1 className="titulo mt-5">Contactanos.</h1>
        <h4 className="subtitulo">resuelve tus dudas </h4>
        <div className="container contact_containers">
          <div className="contact_wrapper">
            <a className="light" href="https://web.whatsapp.com/" target="_blank" rel="noreferrer noopener"><i class="bi bi-whatsapp"></i></a>
            <a href="https://www.instagram.com/j.axisarquitectura/" target="_blank" rel="noreferrer noopener"><i class="bi bi-instagram"></i></a>
            <a href="mailto:correodelapagina" target="_blank" rel="noreferrer noopener"><i class="bi bi-envelope"></i></a>
          </div>
        </div>
      </section>
    </>
  );
}
