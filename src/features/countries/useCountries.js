import { useDispatch, useSelector } from "react-redux"
import { selectControls } from "../controls/controlsSlice"
import {
  loadCountries,
  selectCountriesInfo,
  selectVisibleCountries,
} from "./countriesSlice"
import { useEffect } from "react"

export const useCountries = () => {
  const dispatch = useDispatch()
  const { search, region } = useSelector(selectControls)
  const countries = useSelector((state) =>
    selectVisibleCountries(state, { search, region }),
  )
  const { status, error, qty } = useSelector(selectCountriesInfo)

  useEffect(() => {
    if (!qty) {
      dispatch(loadCountries())
    }
  }, [qty, dispatch])

  return { countries, status, error }
}
