import {combineReducers} from 'redux';
import configs from './configReducer';
import keys from './keysReducer';
import selectedConfig from './selectedConfigReducer'
import master from './masterReducer'

export default combineReducers({
    configs ,  
    keys, 
    selectedConfig,
    master
});
