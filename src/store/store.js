import { configureStore } from '@reduxjs/toolkit'
import taskListReducer from '../components/listSlice'

export const store = configureStore({
    reducer:{
        taskList : taskListReducer,
    }
})