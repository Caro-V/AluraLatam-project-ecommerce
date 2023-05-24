import "../Footer/Footer.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        <img src="/img/whiteLogo.png" alt="Logo Miamá" />
        <strong>Desarrollado por Carolina Velásquez</strong>
        <div className="redes">
          <a href="https://www.linkedin.com/in/carolinavelasquezrodriguez/" target="_blank" rel="noreferrer noopener">
            <img src="/img/linkedin.png" alt="Linkedin" />
          </a>
          <a href="https://github.com/Caro-V" target="_blank" rel="noreferrer noopener">
            <img src="/img/github.png" alt="Github" />
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
