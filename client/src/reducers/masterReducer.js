
import { GET_MASTER_KEYS} from "../constants";
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state=[], action){

    switch(action.type){
        case GET_MASTER_KEYS: 
            return action.payload;       
        default: return state;
    }
}
 