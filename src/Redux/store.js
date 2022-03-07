import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

const initialState = {
    count: 0
}

const rootReducer = combineReducers({
    /*
        Reducers
    */
    count: (state = initialState.count, action) => {
        switch (action.type) {
            case 'increment':
                return state + 1
            case 'decrement':
                return state - 1
            case 'reset':
                return 0
            default:
                return state
        }
    }
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer, composeEnhancers( applyMiddleware(thunk) ))