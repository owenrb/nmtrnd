import {createSlice} from '@reduxjs/toolkit'

const trendSlice = createSlice({
  name: 'trend',
  initialState: {
    x: null,
    y: null,
    entries: [],
    top: [],
  },
  reducers: {
    getEntries: (state, action) => {
      return {...state, ...action.payload}
    },
    addEntry: (state, action) => {
      return {...state, ...action.payload}
    },
  },
})

export const {addEntry, getEntries} = trendSlice.actions
export default trendSlice.reducer
