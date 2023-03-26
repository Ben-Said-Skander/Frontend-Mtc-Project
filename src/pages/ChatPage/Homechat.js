import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"
import style from "./styles.module.css";
const Homechat = ({socket}) => {
    const navigate = useNavigate()
    const [userName, setUserName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem("userName", userName)
        socket.emit("newUser", {userName, socketID: socket.id})
        navigate("/chat")
    }
  return (
    <form className={style.home__container} onSubmit={handleSubmit}>
        <h2 className={style.home__header}>Entrer votre nom d'utlisateur</h2>
        <label htmlFor="username">nom d'utilisateur</label>
        <input type="text" 
        minLength={6} 
        name="username" 
        id='username'
        className={style.username__input} 
        value={userName} 
        onChange={e => setUserName(e.target.value)}
        />
        <button className={style.home__cta}>SIGN IN</button>
    </form>
  )
}

export default Homechat