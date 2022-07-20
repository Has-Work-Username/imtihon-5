import facebookIcon from "../../assets/icons/facebook.png"
import gitHubIcon from "../../assets/icons/gitHub.png"
import twitterIcon from "../../assets/icons/twitter.png"
import linkedInIcon from "../../assets/icons/linkedIn.png"
import "./sidebar.scss"

const Sidebar = () => {
    return(
        <div className="home__sidebar">
            <h2>What I do!</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet, orci in bibendum luctus, turpis ante pretium velit, eu rutrum augue erat ac eros. Cras ultricies mattis convallis.
            </p>
            <a className="sidebar__link" href="#">EXPLORE ME</a>
            <div className="sidebar__social-links">
                <a href="https://www.facebook.com/" target="blank_">
                    <img src={facebookIcon} />
                </a>
                <a href="https://github.com/" target="blank_">
                    <img src={gitHubIcon} />
                </a>
                <a href="#">
                    <img src={twitterIcon} />
                </a>
                <a href="https://www.linkedin.com/" target="blank_">
                    <img src={linkedInIcon} />
                </a>
            </div>
        </div>
    )
}

export default Sidebar