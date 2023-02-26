import axios from "axios"
import { useParams } from "react-router-dom"
       /*DELETE NOTES*/
/******************************/
const deleteNote = async () => {
  const { id } = useParams();
  await axios.delete(`http://localhost:3500/notes/${id}`)
    .then((res) => {
      console.log(res.data);
      loadNotes();
    })
    .catch((err) => console.log(err));
};