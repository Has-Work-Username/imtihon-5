import Container from "../../components/Container/container"
import Footer from "../../components/footer/footer"
import Header from "../../components/Header/header"
import Main from "../../components/main/main"
import Sidebar from "../../components/sidebar/sidebar"
import "./home.scss"

const Home = () => {
    return( 
        <Container>
            <Header />
            <div className="home__items-wrapper">
                <Sidebar />
                <Main />
            </div>
            <Footer />
        </Container>
    )
}

export default Home
