import { GET_BOSSES_LIST, UPDATE_BOSS, INSERT_BOSS, DELETE_BOSS, GET_CONFIG } from '../constants';
import memService from '../Services/memApi';

 export const getAllConfig=()=>async dispatch=>{

     try{
        const files=await memService.getAll(); 
     
        for (let i = 0; i < files.length; i++) {

         var f=files[i].split('\\');
         dispatch(loadConfig(f[0], f[1]));
       }

        }catch(err)
     {
         //TODO:handle error
     }
};


const loadConfig=(path, id)=>async dispatch=>{
   try{
      var boss=await memService.getConfig(path, id);  
      boss.file=id;
      boss.path=path
      dispatch(loadConfigSuccess(boss));
   }catch(err)
   {
      console.log(err)
       //TODO:handle error
   }
};
const loadConfigSuccess= boss =>{
  return { 
  type: GET_CONFIG,
  payload: boss
  };
};

/*
 export const saveBoss=(boss)=> async dispatch=>{
   try{
      console.log('er í actions' + boss.id)
      if(boss.id==undefined){ 
         const bossrtn=await bossesService.insertBoss(boss); 
         boss.id=bossrtn.id;
         dispatch(saveBossSuccess(boss));

      }
      else
      {
         console.log('updateing boss');
         const bossrtn=await bossesService.updateBoss(boss); 
         console.log('updating boss done');

         dispatch(updateBossSuccess(boss));
      }
      
   }catch(err)
   {
       //TODO:handle error
   }
};

const updateBossSuccess=(bossrtn) =>{
   console.log('success  id:'+bossrtn.id);
   return { 
   type: UPDATE_BOSS,
   payload: bossrtn
   };
};

const saveBossSuccess=(bossrtn) =>{
   console.log('success  id:'+bossrtn.id);
   return { 
   type: INSERT_BOSS,
   payload: bossrtn
   };
};

export const deleteBoss=(id)=>async dispatch=>{

    try{
       const success=await bossesService.deleteBoss(id); 
       
       dispatch(deleteBossSuccess(success, id));
    }catch(err)
    {
        //TODO:handle error
    }
};
const deleteBossSuccess= (success, id) =>{
   return { 
   type: DELETE_BOSS,
   payload: id
   };
};
*/