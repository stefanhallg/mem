import React,{useEffect} from 'react';
import {  useSelector} from 'react-redux';
import styles from './styles.module.css';
import ConfigValueItem from '../ConfigValueItem';

const ConfigsValues = () => {
    const selectedConfig=useSelector(state=>state.selectedConfig.config);
    const group=useSelector(state=>state.selectedConfig.group);
    const [keyVals, setkeyVals] = React.useState([]);
    

    console.log(selectedConfig)
    var cfg=useSelector(state=>state.configs.find(f=>f.file==selectedConfig));
    
        /*for(var k in keyVals) {
            console.log(k);
         }
         */
    
       // keyVals.forEach(element => console.log(element));
    
    useEffect(() => {
        if(cfg){
            setkeyVals(Object.keys(cfg.fdsmatrix.servers[group].keyvalues));
            console.log(cfg.fdsmatrix.servers[group].keyvalues["$BaseAddress"]);            

        }
            
            
    }, [selectedConfig])
    

    return(<>
        <div className={styles.bosscard}>
        {cfg ? 
            <div>{selectedConfig}
                <div>{cfg.fdsmatrix.roleKey}</div>
                <div>{cfg.fdsmatrix.version}</div>
<div>{keyVals.length}</div>
                {keyVals? keyVals.map(item => (
                    <ConfigValueItem keys={item} value={cfg.fdsmatrix.servers[group].keyvalues[item]}></ConfigValueItem>     
           )):<div>ekkert</div>}







               
            </div>:<div>no config...</div>}
        </div>
          </>
    )
};

export default ConfigsValues;