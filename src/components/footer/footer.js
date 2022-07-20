import "./footer.scss"
import footerLogo from "../../assets/images/footer__logo.png"

const Footer = () => {
   return(
        <footer className="footer">
            <div className="footer__logo">
                <img src={footerLogo} />
                <h2>Bobur</h2>
                <h2 className="mobile">BoburBlog</h2>
            </div>
            <div className="footer__links-wrapper">
                <div className="footer__links">
                    <h3>FIGHT WITH ME ON:</h3>
                    <a href="#">Twitter</a>
                    <a href="#">Instagram</a>
                    <a href="#">Telegram</a>
                    <a href="#">YouTube</a>
                    <a href="#">Figma</a>
                </div>
                <div className="footer__links">
                    <h3>WHAT I HAVE DONE:</h3>
                    <a href="#">Xalq Kutubxonasi</a>
                    <a href="#">Websitee</a>
                    <a href="#">Website</a>
                    <a href="#">Play Market</a>
                    <a href="#">App Store</a>
                </div>
                <div className="footer__links">
                    <a href="#">Contact</a>
                    <a href="#">Blog</a>
                    <a href="#">Dribbble</a>
                    <a href="#">Behance</a>
                </div>
            </div>
        </footer>
   ) 
}

export default Footer