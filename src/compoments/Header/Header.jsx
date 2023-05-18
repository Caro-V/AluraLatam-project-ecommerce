import '../Header/Header.css'

function Header() {
  return (
    <>
      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Burger Princess</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Members</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Order Tracking</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Log Out</a>
        </li>
      </ul>
    </div>
  </div>
</nav> */}

      <header>
        <div className="px-3 py-2 text-white">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <a
                href="/"
                className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
              >
                <img
                  className="bi me-2"
                  width="60"
                  height="52"
                  role="img"
                  aria-label="Bootstrap"
                  src="public/img/whiteLogo.png"
                  alt="logo blanco"
                />
              </a>

              <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                <li>
                  <a href="#" className="nav-link text-secondary">
                    <svg
                      className="bi d-block mx-auto mb-1"
                      width="24"
                      height="24"
                    >
                      <use xlinkHref="#home"></use>
                    </svg>
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link text-white">
                    <svg
                      className="bi d-block mx-auto mb-1"
                      width="24"
                      height="24"
                    >
                      <use xlinkHref="#speedometer2"></use>
                    </svg>
                    Comprar
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link text-white">
                    <svg
                      className="bi d-block mx-auto mb-1"
                      width="24"
                      height="24"
                    >
                      <use xlinkHref="#table"></use>
                    </svg>
                    Clientes
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link text-white">
                    <svg
                      className="bi d-block mx-auto mb-1"
                      width="24"
                      height="24"
                    >
                      <use xlinkHref="#grid"></use>
                    </svg>
                    Contacto
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link text-white">
                    <svg
                      className="bi d-block mx-auto mb-1"
                      width="24"
                      height="24"
                    >
                      <use xlinkHref="#people-circle"></use>
                    </svg>
                    Nosotros
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="px-3 py-2 border-bottom mb">
          <div className="container d-flex flex-wrap justify-content-center">
            <form className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto">
              <input
                type="search"
                className="form-control"
                placeholder="Buscar..."
                aria-label="Search"
              />
            </form>

            <div className="text-end">
              <button
                type="button"
                className="btnlogin btn btn-light text-dark me-2"
              >
                Ingresar
              </button>
              <button type="button" className="btnsignup btn btn-primary">
                Registrarse
              </button>
            </div>
          </div>
        </div>
        <div className="header">
          <img src="public/img/header.png" />
        </div>
      </header>
    </>
  );
}

export default Header;
