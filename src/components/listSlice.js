import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: [
        { id: 1, description: "test", isDone: true },
        { id: 2, description: "test 2", isDone: false }
    ]
}

export const listSlice = createSlice({
    name: "list",
    initialState,
    reducers: {
        filterList : (state, action) => {state.value = action.payload},
        addTask: (state, action) => { state.value = [...state.value, action.payload] },
        changeIsDone: {
            reducer(state, action) {
                state.value[action.payload.id - 1].isDone = action.payload.isDone
            },
            prepare(id, isDone) {
                return {
                    payload: {
                        id,
                        isDone
                    }
                }
            }
        },
        changeDescription : {
            reducer(state, action){
                state.value[action.payload.id-1].description = action.payload.description
            },
            prepare(id, description) {
                return{
                    payload:{
                        id,
                        description
                    }
                }
            }
        }
    }
})

export const { addTask, changeIsDone, changeDescription, filterList } = listSlice.actions
export default listSlice.reducer
