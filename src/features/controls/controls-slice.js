import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  search: "",
  region: "",
}

export const controlsSlice = createSlice({
  name: "@@controls",
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload
    },
    setRegion(state, action) {
      state.region = action.payload
    },
    clearControls() {
      return initialState
    },
  },
})
export const controlsReducer = controlsSlice.reducer
export const { setSearch, setRegion, clearControls } = controlsSlice.actions

export const selectRegion = (state) => state.controls.region
export const selectSearch = (state) => state.controls.search
export const selectControls = (state) => state.controls
