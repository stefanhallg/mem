import { SET_SELECTED_CONFIG} from "../constants";
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state='', action){
   
    switch(action.type){
        case SET_SELECTED_CONFIG: 
            return  action.payload;        
        default: return state;
    }
}
 