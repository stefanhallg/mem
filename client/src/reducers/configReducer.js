import { GET_CONFIG, CLEAR_BOSS, UPDATE_BOSS} from "../constants";
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state=[], action){

    switch(action.type){
        case GET_CONFIG: 
            return [
                ...state, action.payload 
            ];
        case CLEAR_BOSS: 
            console.log(action);
            return  action.payload;
        case UPDATE_BOSS:
            return  action.payload;
        default: return state;
    }
}
 