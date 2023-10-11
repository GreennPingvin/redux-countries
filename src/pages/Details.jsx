import { useNavigate } from "react-router-dom"
import { IoArrowBack } from "react-icons/io5"

import { Button } from "../components/Button"

export const Details = () => {
  const navigate = useNavigate()

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {null}
    </div>
  )
}
