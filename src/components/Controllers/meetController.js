import axios from "axios"
import { useParams } from "react-router-dom"
        /*ADD MEET*/
/******************************/
const addMeet = () => {
    axios.post("http://localhost:3500/meets", data)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

        /*GET ALL MEETS*/
/******************************/
const getAllMeets = () => {
    axios.get("http://localhost:3500/meets")
        .then((res) => {
            setMeets(res.data);
            console.log(res.data);
        })
        .catch((err) => console.log(err));
}
        /*DELETE MEET*/
/******************************/
const id = useParams()
const deleteMeet = async (id) => {
    await axios.delete(`http://localhost:3500/meets/${id}`)
        .then((res) => {
            loadMeets();
            console.log(res.data);
        })
        .catch((err) => console.log(err));
} 