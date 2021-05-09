const api='http://localhost:5001/api/';

const bossService=()=>{
    
    const insertBoss=(boss)=>{
        console.log('servoce call');
        try {            
           return fetch(`${api}bosses`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Accept' :'application/json'
              },
              body: JSON.stringify(boss),
            }).then(b=>b.json())
          } catch (err) {
           
            return -1;
          }

    };
    const updateBoss=(boss)=>{
      console.log('servoce callddd');
      try {            
         return fetch(`${api}bosses/${boss.id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
              'Accept' :'application/json'
            },
            body: JSON.stringify(boss),
          }).then(b=>b.ok)
        } catch (err) {    
          console.log(err);     
          return false;
        }

  };
  const deleteBoss=(id)=>{
    console.log('servoce callddd');
    try {            
       return fetch(`${api}bosses/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Accept' :'application/json'
          }
        }).then(b=>b.ok)
      } catch (err) {    
        console.log(err);     
        return false;
      }

};


  
    return{
        getAll:()=>fetch(api+"files").then(b=>b.json()),
        getMaster:()=>fetch(api+"master").then(b=>b.json()),
        getConfig:(path, id)=>fetch(api+"files/"+path+"/"+id).then(b=>b.json()),
        insertBoss,
        updateBoss,
        deleteBoss
    };
};
export default bossService();
