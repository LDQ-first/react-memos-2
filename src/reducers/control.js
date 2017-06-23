import { combineReducers } from 'redux'
import {
  TOGGLE_SIDEBAR,
  TOGGLE_ADD_TODO,
  ADD_TODO_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE
} from './constant'


const isSidebarOpen = (state = false, action) => {
    switch(action.type) {
        case TOGGLE_SIDEBAR:
            return !state
        default:
            return state
    }
}


export default combineReducers({
    isSidebarOpen
})

export const getIsSidebarOpen = (state) => state.isSidebarOpen