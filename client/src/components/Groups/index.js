import React from 'react';
import {  useSelector, useDispatch} from 'react-redux';
import Configs from '../Configs';

import {setSelectedConfig} from '../../actions/selectedConfigActions'

const Groups = () => {
    const bosses=useSelector(state=>state.configs);
     const dispatch =useDispatch();
     var uniqueArray = bosses.reduce(function (a, d) {
        var key=Object.keys(d.fdsmatrix.servers);
        key.forEach(element => {
          if (a.indexOf(element) === -1) {
          a.push(element);
        }
        });
        
        return a;
     }, []);


    return(<>
        <div>
        {uniqueArray.map(u => <Configs key={u} id={u}></Configs>)}
        </div>
          </>
    )
};


export default Groups;