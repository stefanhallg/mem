import React from 'react';
import {  useSelector, useDispatch} from 'react-redux';
import {setSelectedConfig} from '../../actions/selectedConfigActions'
import styles from './styles.module.css';
import {Collapse} from 'react-collapse';
import {UnmountClosed} from 'react-collapse';

const Configs = (props) => {

    
  const [renderChildren, setRenderChildren] = React.useState(false);
function exists(value){
   var rtn=false;
    var key=Object.keys(value.fdsmatrix.servers);
    key.forEach(element => {   
        if(props.id===element){
            rtn= true;
        }          
    }
    );
    if (!value.fdsmatrix.roleKey)
        rtn =false
    return rtn;
};

    const bosses=useSelector(state=>state.configs.filter(exists));
    const dispatch =useDispatch();
    var isopen=false;
     const handleOpen=()=>{
        setRenderChildren(!renderChildren);
     }
    return(<>
        <div className={styles.groups}>
            <div className={styles.groupHeader} onClick={handleOpen}><b>{props.id}</b></div>
        <Collapse isOpened={renderChildren}>

        {bosses ? bosses.map((b) => <div className={styles.groupItems}  onClick={() => dispatch(setSelectedConfig(b.file, props.id))}>{b.fdsmatrix.roleKey}</div>):<div>loading bosses...</div>}
        </Collapse>
        </div>
          </>
    )
};


export default Configs;