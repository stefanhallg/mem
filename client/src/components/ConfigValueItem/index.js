import React,{useEffect} from 'react';
import {  useSelector} from 'react-redux';
import styles from './styles.module.css';
import keysReducer from '../../reducers/keysReducer';

const ConfigValueItem = (props) => {
    const masters=useSelector(state=>state.master[props.keys]); 
    const valueType=()=>{
        switch (masters.valueType){
            case "password": 
            case "integer": 
            case "string": 
            return (<input type="text" className={styles.input} value={props.value}  />);
            break;
            case "list": 
            const val=masters.valueValues.split(',');
            return (<select>
                     {val.map(i=>{
                         if(i==props.value)
                            return <option selected value={i}>{i}</option>
                            else
                            return <option  value={i}>{i}</option>
                            }
                            )}
                    </select>);
            break;
            case "boolean": 
            if(masters.valueValues==null){
                return(<>
                 <input type="radio"  name={props.keys} value={true} checked={true===props.value}/>{true}
                 <input type="radio"  name={props.keys} value={false} checked={false===props.value}/>{false}                     
                      </>

                );



            }else{
            const rval=masters.valueValues.split(',');
            return (<>
                     {rval.map(i=><> 
                        <input type="radio"  name={props.keys} value={i.trim()} checked={i.trim()===props.value}/>{i.trim()}
                        </>
                            )}
                    </>);
            }
            break;
            }
        }

        
            
   
    

    return(<div className={styles.item}>
    <div>{props.keys}</div>
    <div>{valueType()}</div>
</div>
    )

  



};

export default ConfigValueItem;

/**
 * defaultValue: ""
description: ""
group: "RB"
mandatory: false
regex: null
roles: ""
scope: null
sourceArea: "Core"
valueType: "string"
valueValues: null
 */