import { GET_BOSS,CLEAR_BOSS } from '../constants';
import bossesService from '../Services/memApi'

 export const getConfig=(id)=>async dispatch=>{
     try{
        const boss=await bossesService.getConfig(path, id);         
        dispatch(getBossSuccess(boss));
     }catch(err)
     {
         //TODO:handle error
     }
};
 const getBossSuccess= boss =>{
    return { 
    type: GET_BOSS,
    payload: boss
    };
 };

 export const clearBoss=()=>{
   return { 
      type: CLEAR_BOSS,
      payload: {}
      };

 };

 