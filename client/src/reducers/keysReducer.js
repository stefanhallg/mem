import { GET_BOSSES_LIST, UPDATE_BOSS, INSERT_BOSS, DELETE_BOSS} from "../constants";
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state=[], action){
   
    switch(action.type){
        case GET_BOSSES_LIST: 
            return  action.payload;
        case UPDATE_BOSS:
            const index = state.findIndex(b => b.id === action.payload.id);
            const newArr=[...state];
            newArr[index]=action.payload;
             return [ 
                ...newArr
            ];
        case INSERT_BOSS:
            return [
                ...state, action.payload 
            ];
        case DELETE_BOSS: 
            const idx = state.findIndex(b => b.id == action.payload);
            const arr=[...state];
            arr.splice(idx, 1);

             return [ 
                ...arr
            ];           
        default: return state;
    }
}
 