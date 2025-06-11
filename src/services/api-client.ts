import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'0cdeeb937c1545a3919a5d7f6cd2838a'
    }
})