import notFound from "../../assets/images/404.png"
import "./404.scss"
import{Link} from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../contexts/auth"
const PageNotFound = () => {
    const {token} = useContext(AuthContext)
    return(
        <div className="not-found-wrapper">
            <img src={notFound} />
            <h2>Page not found - 404</h2>
            <p>This page not found (deleted or never exists). <br />Try a phrase in search box or back to home and start again.</p>
            <Link className="to-home" to={"/" + (token ? "" : "login" )}>{token ? "TAKE ME HOME!" : "TAKE ME LOGIN!"}</Link>
        </div>  
    )
}

export default PageNotFound