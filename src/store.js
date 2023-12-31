import { configureStore } from "@reduxjs/toolkit"
import { themeReducer } from "./features/theme/theme-slice"
import * as api from "./config"
import axios from "axios"
import { controlsReducer } from "./features/controls/controlsSlice"
import { countriesReducer } from "./features/countries/countriesSlice"
import { detailsReducer } from "./features/details/detailsSlice"

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    controls: controlsReducer,
    countries: countriesReducer,
    details: detailsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      serializableCheck: false,
    }),
})
