import React,{useEffect} from 'react';
import {  useSelector} from 'react-redux';
import styles from './styles.module.css';
import ConfigValueItem from '../ConfigValueItem';
import Groups from '../Groups';

const ConfigsValues = () => {
    const selectedConfig=useSelector(state=>state.selectedConfig.config);
    const group=useSelector(state=>state.selectedConfig.group);
    const [keyVals, setkeyVals] = React.useState([]);
    const [grp, setGrp] = React.useState([]);

    const masters=useSelector(state=>state.master);   

    console.log(selectedConfig)
    var cfg=useSelector(state=>state.configs.find(f=>f.file==selectedConfig));
    var arr=[];
    
    useEffect(() => {
        if(cfg){
            setkeyVals(Object.keys(cfg.fdsmatrix.servers[group].keyvalues));
        }
        
        Object.keys(masters).forEach(function(key) {
        
            if (arr.indexOf(masters[key].group) === -1) {
                arr.push(masters[key].group);
              }
        });
        setGrp(arr);
            
            
    }, [selectedConfig])
    

    return(<>
        <div className={styles.bosscard}>

{cfg?<div className={styles.title}>{cfg.fdsmatrix.roleKey}</div>:<>no config</>}        
{grp? grp.map(m=><Groups grp={m} key={m}></Groups>):<div>nono</div>

}


      
        </div>
          </>
    )
};

export default ConfigsValues;