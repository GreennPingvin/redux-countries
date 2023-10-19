import { configureStore } from "@reduxjs/toolkit"
import { themeReducer } from "./features/theme/theme-slice"
import { countriesReducer } from "./store/countries/countries-reducer"
import { detailsReducer } from "./store/details/details-reducer"
import * as api from "./config"
import axios from "axios"
import { controlsReducer } from "./features/controls/controls-slice"

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
