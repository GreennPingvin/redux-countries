import { createSlice } from "@reduxjs/toolkit"

export const themeSLice = createSlice({
  name: "@@theme",
  initialState: "light",
  reducers: {
    setTheme: (_, action) => action.payload,
  },
})

export const themeReducer = themeSLice.reducer
export const { setTheme } = themeSLice.actions
