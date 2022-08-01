
export const Footer = () => {
    const year = new Date();
  return (
    <footer>
        <div className="footer__content">
            <p>Copyright © {year.getFullYear()} | Gerardo Ballesteros. Todos los derechos reservados.</p>
        </div>
    </footer>
  )
}
