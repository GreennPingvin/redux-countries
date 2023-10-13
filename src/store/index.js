import { applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from "@redux-devtools/extension"
import thunk from "redux-thunk"
import axios from "axios"
import * as api from "../config"
import { themeReducer } from "./theme/theme-reducer"
import { countriesReducer } from "./countries/countries-reducer"
import { controlsReducer } from "./controls/controls-reducer"
import { detailsReducer } from "./details/details-reducer"

const rootReducer = combineReducers({
  theme: themeReducer,
  countries: countriesReducer,
  controls: controlsReducer,
  details: detailsReducer,
})

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunk.withExtraArgument({
        client: axios,
        api,
      }),
    ),
  ),
)
