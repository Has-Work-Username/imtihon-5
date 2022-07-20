import "./login.scss"
import Logo from "../../components/Logo/logo"
import Container from "../../components/Container/container"
import { useContext, useRef, useState } from "react"
import { AuthContext } from "../../contexts/auth"
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const { setToken } = useContext(AuthContext)
    const [ error, setError ] = useState()
    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate()

    const handleFormSubmit = (evt) => {
        evt.preventDefault()

        const emailValue = emailRef.current.value;
        const passwordValue = passwordRef.current.value;

        if(emailValue && passwordValue) {
            fetch("https://reqres.in/api/login", { 
                method: "POST",
                body: JSON.stringify({
                    "email": emailValue,
                    "password": passwordValue
                }),
                headers:{
                    'Content-Type': 'application/json'
                },
            }).then(res => {
                if(res.ok){
                   return res.json()
                }
            })
            .then(data => {
                setToken(data.token)
                navigate("/")
            })
            .catch(e => setError(e.message))
        }
    }
    return(
        <Container>
            <div className="top-logo">
                <Logo />
            </div>
            <div className="login-wrapper">
                <h1>Login</h1>
                <form onSubmit={handleFormSubmit}>
                    <input ref={emailRef} aria-label="email" type="email" placeholder="Login" />
                    <input ref={passwordRef} aria-label="password" type="password" placeholder="Password" />
                    <button type="submit">Submit</button>
                </form>
                <span>{error}</span>
            </div>  
        </Container>
    )
}

export default Login