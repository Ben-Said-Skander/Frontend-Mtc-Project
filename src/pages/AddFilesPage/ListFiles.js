import React from "react";
import { useState, useEffect } from "react";
import Sidebar from "../Sidebar/SideBar";
import style from "./styles.module.css";
//This component displays the list of imported files
export default function ListFiles() {
  const [files, setFiles] = useState([]);
  const [searchFile, setSearchFile] = useState("");
  useEffect(() => {
    let files = JSON.parse(localStorage.getItem("files") || "[]");
    setFiles(files);
  }, []);

  return (
    <div className={style.body}>
      <Sidebar />
      <div className={style.containerr}>
        <form action="#" className={style.searchBar}>
          <input
            type="text"
            name="query"
            id="query"
            placeholder="Rechercher"
            onChange={(event) => {
              setSearchFile(event.target.value);
            }}
          />
          <button type="button">
            <img src="../homeassets/img/fileImage/search.png" />
          </button>
        </form>
      </div>
      <div className={style.liste}>
        {files
          .filter((val) => {
            if (searchFile == "") {
              return val;
            } else if (
              val.fileName.toLowerCase().includes(searchFile.toLowerCase())
            ) {
              return val;
            }
          })
          .map((value, key) => (
            <ul className={style.valListe} key={key}>
              <li className={style.liFile}>
                <img
                  className={style.imgFile}
                  src="../homeassets/img/fileImage/pdf.png"
                />
                <div>
                  <p>{value.fileName}</p>
                  <p>{value.dateFile}</p>
                </div>
              </li>
            </ul>
          ))}
      </div>
      {files.length === 0 ? <>Aucun fichier à afficher</> : <></>}
    </div>
  );
}
