import { applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from "@redux-devtools/extension"
import thunk from "redux-thunk"
import axios from "axios"
import * as api from "../config"
import { themeReducer } from "./theme/theme-reducer"

const rootReducer = combineReducers({ theme: themeReducer })

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
