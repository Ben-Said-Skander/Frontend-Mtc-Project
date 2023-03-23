import React from 'react'
import {useNavigate} from "react-router-dom"
import style from "./styles.module.css";
const ChatBody = ({messages, typingStatus, lastMessageRef}) => { 
  const navigate = useNavigate()
  

  const handleLeaveChat = () => {
    localStorage.removeItem("userName")
    navigate("/")
    window.location.reload()
  }
  
  return (
    <>
      <header className={style.chat__mainHeader}>
          <h2>Discusions</h2>
          <button className={style.leaveChat__btn} onClick={handleLeaveChat}>LEAVE CHAT</button>
        </header>


        <div className={style.message__container}>
          {messages.map(message => (
            message.name === localStorage.getItem("userName") ? (
              <div className={style.message__chats} key={message.id}>
            <p className={style.sender__name}>You</p>
            <div className={style.message__sender}>
                <p>{message.text}</p>
            </div>
          </div>
            ): (
              <div className={style.message__chats} key={message.id}>
            <p>{message.name}</p>
            <div className={style.message__recipient}>
                <p>{message.text}</p>
            </div>
          </div>
            )
            ))}

          <div className={style.message__status}>
            <p>{typingStatus}</p>
          </div>
          <div ref={lastMessageRef} />   
        </div>
    </>
  )
}

export default ChatBody