import { Header } from "../Header/Header";
import img22 from "../../assets/img/header.jpg";
import story from "../../assets/img/storyimg.jpg";
import vision from "../../assets/img/vision.jpg";
import mision from "../../assets/img/mision.jpg";
import "./About.css";
import "animate.css";
import WOW from 'wowjs'

import { useEffect } from "react";

export function About() {

  return (
    <>
      <Header title="About Us" image={img22}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora saepe
        nulla cum. Sapiente quisquam perferendis est commodi, dolorum aut
        ratione!
      </Header>

      <section className="about_story mt-5">
        <div className="container about_story-container">
            <div className="about_section-image  ">
                <img src={story} alt="" className="wow animate__animated animate__backInLeft"/>
            </div>
            <div className="about_section-content">
                <h1>Nuestra Historia</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, consequuntur excepturi suscipit maxime quam ab molestias veritatis repudiandae. Ipsam quibusdam temporibus eum recusandae consequatur. Tenetur dolor cum aspernatur impedit quasi omnis nemo ratione sequi reiciendis optio ipsa, nostrum aliquam vel illum doloremque reprehenderit repudiandae. Vero cum accusamus mollitia sapiente magnam ad repudiandae dolore, dolorem rem quaerat nisi maxime atque aspernatur iste fuga. Natus officia magnam nesciunt ad, blanditiis rem earum dolorum quia hic? Eveniet, culpa. Corrupti atque sit quam iste!
                </p>
            </div>
        </div>
      </section>

      <section className="about_vision mt-5">
        <div className="container about_vision-container ">
            <div className="about_section-content">
                <h1>Vision</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, consequuntur excepturi suscipit maxime quam ab molestias veritatis repudiandae. Ipsam quibusdam temporibus eum recusandae consequatur. Tenetur dolor cum aspernatur impedit quasi omnis nemo ratione sequi reiciendis optio ipsa, nostrum aliquam vel illum doloremque reprehenderit repudiandae. Vero cum accusamus mollitia sapiente magnam.
                </p>
            </div>
            <div className="about_section-image ">
                <img src={vision} alt="" className="wow animate__animated animate__backInDown" />
            </div>
        </div>
      </section>

      <section className="about_mision mt-5">
        <div className="container about_mision-container">
            <div className="about_section-image ">
                <img src={mision} alt="" className="wow animate__animated animate__backInRight"/>
            </div>
            <div className="about_section-content">
                <h1>Mision</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, consequuntur excepturi suscipit maxime quam ab molestias veritatis repudiandae. Ipsam quibusdam temporibus eum recusandae consequatur. Tenetur dolor cum aspernatur impedit quasi omnis nemo ratione sequi reiciendis optio ipsa, nostrum aliquam vel illum doloremque reprehenderit repudiandae. Vero cum accusamus mollitia sapiente magnam.
                </p>
            </div>
            
        </div>
      </section>
    </>
  );
}
