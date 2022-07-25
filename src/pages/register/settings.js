import axios from 'axios';


const instance=axios.create({
    baseURL:'https://ololo.pythonanywhere.com/api/',
    headers:{
        "Content-Type":"application/json"
    }
})

export default instance;
