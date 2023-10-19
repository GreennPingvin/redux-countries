import { useDispatch, useSelector } from "react-redux"
import { selectRegion, setRegion } from "./controls-slice"

export const useRegion = () => {
  const regionName = useSelector(selectRegion)
  const dispatch = useDispatch()

  const handleSelect = (region) => {
    dispatch(setRegion(region?.value || ""))
  }
  return { regionName, handleSelect }
}
