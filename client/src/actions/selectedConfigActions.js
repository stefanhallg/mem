import { SET_SELECTED_CONFIG} from "../constants";
export const setSelectedConfig= (config, group) =>{
    return { 
    type: SET_SELECTED_CONFIG,
    payload: {config, group}
    };
  };