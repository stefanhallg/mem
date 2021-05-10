import React, {useEffect} from 'react';
import {  useSelector, useDispatch} from 'react-redux';
import styles from './styles.module.css';

import ConfigValueItem from '../ConfigValueItem';

const Groups = (props) => {
    const [grp, setGrp] = React.useState([]);
    const group=useSelector(state=>state.selectedConfig.group);
    const selectedConfig=useSelector(state=>state.selectedConfig.config);
    const [keyVals, setkeyVals] = React.useState([]);
    var cfg=useSelector(state=>state.configs.find(f=>f.file==selectedConfig));
    const masters=useSelector(state=>state.master);   
    
    useEffect(() => {  
        var arr=[];  
        Object.keys(masters).forEach(function(key) {        
            if (masters[key].group === props.grp) {  
                arr.push(key);
               
            }
        });
        setGrp(arr);  
        if(cfg){
            setkeyVals(Object.keys(cfg.fdsmatrix.servers[group].keyvalues).filter(i=>(grp.indexOf(i) !=-1)));    
        }   
    }, [props])

return(<>    
  
    {keyVals.length>0&&
        <div className={styles.card}>
        <div className={styles.header}>{props.grp}</div>
    {keyVals && keyVals.map(item => (
       
            <ConfigValueItem keys={item} value={cfg.fdsmatrix.servers[group].keyvalues[item]}></ConfigValueItem>
                       ))}
    </div>
    }
      </>
)
};

export default Groups;