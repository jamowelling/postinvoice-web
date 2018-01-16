import { combineReducers } from 'redux';
import invoices from './invoices/reducer';

const rootReducer = combineReducers({
  invoices,
});

export default rootReducer;
