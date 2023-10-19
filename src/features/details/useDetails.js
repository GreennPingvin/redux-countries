import { useDispatch, useSelector } from "react-redux"
import { clearDetails, loadCountryByName, selectDetails } from "./detailsSlice"
import { useEffect } from "react"

export const useDetails = (name) => {
  const dispatch = useDispatch()
  const { currentCountry, error, status } = useSelector(selectDetails)

  useEffect(() => {
    dispatch(loadCountryByName(name))
    return () => {
      dispatch(clearDetails())
    }
  }, [name, dispatch])
  return { currentCountry, error, status }
}