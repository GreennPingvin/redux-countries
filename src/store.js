import { configureStore } from "@reduxjs/toolkit"
import { themeReducer } from "./features/Theme/theme-slice"
import { controlsReducer } from "./store/controls/controls-reducer"
import { countriesReducer } from "./store/countries/countries-reducer"
import { detailsReducer } from "./store/details/details-reducer"
import * as api from "./config"
import axios from "axios"

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
    }),
})
