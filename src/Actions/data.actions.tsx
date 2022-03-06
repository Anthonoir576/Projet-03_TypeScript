import axios      from "axios";
import { apiKey } from "../Components/Api/apiKey";

export const GET_DATA = 'GET_DATA';


export const getData = (data? :any) => {
    return (dispatch :any) => {
     return axios({
        method: 'GET',
        url: `${apiKey.base}${data}`,
        withCredentials: true
     }) 
     .then((result) => {
        dispatch({ type: GET_DATA, payload: result.data })
     })
     .catch((error) => console.log(error));    
    };
};

