import React,{useEffect} from 'react';
import {  useSelector} from 'react-redux';
import keysReducer from '../../reducers/keysReducer';
import styles from './styles.module.css';

const Header = () => {
    //const masters=useSelector(state=>state.master['$WcfHostName']);
    const masters=useSelector(state=>state.master);
    return(<>
        <div className={styles.bosscard}>        
        </div>
          </>
    )
};

export default Header;