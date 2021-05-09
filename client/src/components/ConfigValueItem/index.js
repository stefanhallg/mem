import React,{useEffect} from 'react';
import {  useSelector} from 'react-redux';
import styles from './styles.module.css';
import keysReducer from '../../reducers/keysReducer';

const ConfigValueItem = (props) => {
    const masters=useSelector(state=>state.master[props.keys]);   
    return(<div className={styles.item}>
    <div>{props.keys}</div>
    <div><input type="text" className={styles.input} value={props.value}  /></div>
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