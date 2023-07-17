import "./Menu.css";

export function Menu() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div  class="container">
          <a className='logo' class="navbar-brand" href="#">
            J-AXIS
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className='nav_links' class="navbar-nav float-right">
              <a class="nav-link active" aria-current="page" href="/">
                Home
              </a>
              <a class="nav-link" href="About">
                About us
              </a>
              <a class="nav-link" href="Servicios">
                Services
              </a>
              <a class="nav-link" href="Proyectos">
                Proyects
              </a>
              <a class="nav-link" href="Contact">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
