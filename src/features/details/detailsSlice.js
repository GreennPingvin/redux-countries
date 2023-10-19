import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const loadCountryByName = createAsyncThunk(
  "@@details/loadCountryByName",
  (name, { extra: { client, api } }) => {
    return client.get(api.searchByCountry(name))
  },
)
export const loadNeighbors = createAsyncThunk(
  "@@details/loadNeighbors",
  (borders, { extra: { client, api } }) => {
    return client.get(api.filterByCode(borders))
  },
)

const initialState = {
  currentCountry: null,
  status: "idle",
  error: null,
  neighbors: [],
}

export const detailsSlice = createSlice({
  name: "@@details",
  initialState,
  reducers: {
    clearDetails() {
      return initialState
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCountryByName.pending, (state) => {
        state.status = "loading"
        state.error = null
      })
      .addCase(loadCountryByName.rejected, (state, action) => {
        state.status = "rejected"
        state.error = action.payload || action.meta.error
      })
      .addCase(loadCountryByName.fulfilled, (state, action) => {
        state.currentCountry = action.payload.data[0]
        state.status = "received"
      })
      .addCase(loadNeighbors.fulfilled, (state, action) => {
        state.neighbors = action.payload.data.map((country) => country.name)
      })
  },
})

export const detailsReducer = detailsSlice.reducer
export const { clearDetails } = detailsSlice.actions

// selectors
export const selectDetails = (state) => state.details
export const selectNeighbors = (state) => state.details.neighbors
