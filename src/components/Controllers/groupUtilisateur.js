import axios from "axios"
  /* ADD GROUP UTILISATEUR */
/******************************/
const addGroup = () => {
  const data = {
    NomGroup: "myGroupName",
    DescriptionGroup: "myGroupDescription"
  }

  axios.post("http://localhost:3500/grouputilisateur", data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}