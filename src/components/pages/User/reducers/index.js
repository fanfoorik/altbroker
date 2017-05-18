import { combineReducers } from 'redux';
import data from './userDataReducer';
import work from '../components/Work/reducers';
import contacts from '../components/Contacts/reducers';

export default combineReducers({
  data,
  work,
  contacts,
});
