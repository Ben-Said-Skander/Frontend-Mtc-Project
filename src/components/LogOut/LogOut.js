import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styles from "./styles.module.css";
import { useNavigate } from 'react-router-dom';   

export default function LogOut() {
    const navigate = useNavigate();
    const [redirectt, setRedirect]= useState(false);
    const logoutUser = async () => {
        try {
            const res = await axios.get('http://127.0.0.1:3004/logout');
            navigate("/signin");
            /*if(res.data.success==true){
                setRedirect(true);
            }*/
        } catch (err) {
            console.log(err.response);
        }
    };
    return (
        <div className="logOut">
            <nav className={styles.navbar}>
                <h1>MySite</h1>
                <button className={styles.white_btn} onClick={(e) => logoutUser()}>
                    Logout
                </button>
            </nav>
        </div>
    )
}
