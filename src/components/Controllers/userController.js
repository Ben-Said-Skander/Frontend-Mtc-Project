import axios from "axios"
import { useParams } from "react-router-dom"
       /*GET USER BY ID*/
/******************************/
const getUserById = async () => {
    const { id } = useParams();
    await axios.get(`http://localhost:3500/users/${id}`)
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  };