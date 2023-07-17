import "./Contact.css"


export function Contact(){
    return(
        <>
          <section id="contact">
                <h2 className="titulo">Contactanos</h2>

                <div className="container contact_container">
                    <div className="contact_options">
                        <article className="contact_option">
                            <i class="bi bi-envelope" ></i>
                            <h4>Email</h4>
                            <h5>correoempresa@gmail.com</h5>
                            <a href="mailto:correoempresa@gmail.com" target="_blank">send a message</a>
                        </article>

                        <article className="contact_option">
                            <i class="bi bi-whatsapp"></i>
                            <h4>WhatsApp</h4>
                            <h5>+57 000-000-00-00</h5>
                            <a href="https://api.whatsapp.com/send?phone+573207699402" target="_blank">send a message</a>
                        </article>
                    </div>

                    <form action="">
                    <input type="text" name="name" placeholder="Your Full Name" required/>
                        <input type="email" name="email" placeholder="Your Email" required/>
                        <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
                        <button type="submit" className="btn btn-dark">send message</button>
                    </form>

                    
                </div>
            </section>
        </>
    )
}