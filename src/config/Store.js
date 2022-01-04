import {
    createStore,
    combineReducers,
    compose,
    applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'

import citasReducer from './citasDuck'

//Constante para usar la extencios de ReduxDevtools en el navegador
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const rootReducer = combineReducers({
    citasStore: citasReducer,

})

export default function generateStore() {
    const store = createStore(rootReducer,
        composeEnhancers(applyMiddleware(thunk)))

    return store;
}