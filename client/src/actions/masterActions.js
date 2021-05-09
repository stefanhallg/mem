import { GET_MASTER_KEYS } from '../constants';
import memService from '../Services/memApi';

export const loadMaster=()=>async dispatch=>{
   try{
      var keys=await memService.getMaster();
      dispatch(loadMasterSuccess(keys));
   }catch(err)
   {
      console.log(err)
       //TODO:handle error
   }
};
const loadMasterSuccess= keys =>{
  return { 
  type: GET_MASTER_KEYS,
  payload: keys.fdsmatrix.Keys
  };
};