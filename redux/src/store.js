import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux'

//reducer
import authReducer from './components/redux/reducer/authReducer';

const rootReducer = combineReducers({
    authReducer: authReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store

