// third-party
import { combineReducers } from 'redux';

// project import
import auth from './auth'
import common from './common'

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ auth, common });

export default reducers;
