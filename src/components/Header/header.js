import "./header.scss"
import SearchIcon from "../../assets/images/Search-icon.png"
import Logo from "../Logo/logo"

const Header = () => {
    return( 
        <>
            <header>
                <Logo />
                <nav>
                    <ul className="header__types-filter">
                        <li>All</li>   
                        <li>Design Theory</li>   
                        <li>UX</li>   
                        <li>UI</li>   
                        <li>Typography</li>   
                    </ul>
                </nav>  
                <button class="btn-menu" type="button">
                    <i class="btn-menu__bars" aria-hidden="true"></i>
                    <span class="visually-hidden"></span>
                </button>
                <form>
                    <input type="text" placeholder="Search" />
                    <button type="submit">
                        <img src={SearchIcon} />
                    </button>
                </form>
            </header> 
        </>
    )
}

export default Header