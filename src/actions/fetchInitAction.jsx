import axios from "axios";

export const fetchInit = () => (dispatch) => {
    
    axios.get("http://localhost:8080/init.json")
    .then(res => res.data)
    .then(data=>{

		console.log(data);

    })
    .catch((error)=>{
        console.log(error);
    })
};