import { useDispatch, useSelector } from "react-redux"
import { selectRegion, setRegion } from "../controlsSlice"

export const useRegion = () => {
  const regionName = useSelector(selectRegion)
  const dispatch = useDispatch()

  const handleSelect = (region) => {
    console.log(region)
    dispatch(setRegion(region?.value || null))
  }
  return { regionName, handleSelect }
}
