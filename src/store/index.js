import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';

import reducers from '../reducers';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
