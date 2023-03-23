import React, {useState, useEffect} from 'react'
import style from "./styles.module.css";
const ChatBar = ({socket}) => {
    const [users, setUsers] = useState([])

    useEffect(()=> {
        socket.on("newUserResponse", data => setUsers(data))
    }, [socket, users])

  return (
    <div className={style.chat__sidebar}>
       
        <div>
            <h4  className={style.chat__header}>ACTIVE USERS</h4>
            <div className={style.chat__users}>
                {users.map(user => <p key={user.socketID}>{user.userName}</p>)}
            </div>
        </div>
  </div>
  )
}

export default ChatBar