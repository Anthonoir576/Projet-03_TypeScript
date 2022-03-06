import { GET_DATA } from "../Actions/data.actions";


const initialState = {};



export default function userReducer(state = initialState, action :any) {
    switch (action.type) {

        case GET_DATA: 
            return action.payload;

        default:
            return state;

    }
};