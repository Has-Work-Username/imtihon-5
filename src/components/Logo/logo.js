import "./logo.scss"
import logo from "../../assets/images/Logo.png"

const Logo = () => {
    return(
        <div className="header__logo">
            <img src={logo} />
            <h1>BoburBlog</h1>
        </div>
    )
}

export default Logo