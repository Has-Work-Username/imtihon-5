import PageNotFound from "../../components/404/404"
import Container from "../../components/Container/container"
import Header from "../../components/Header/header"
import "./not-found.scss"

const NotFound = () => {
    return(
        <Container>
           <Header />
           <PageNotFound />
        </Container>
    )
}

export default NotFound