import { IoMoon, IoMoonOutline } from "react-icons/io5"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { setTheme } from "./theme-slice"

const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  text-transform: capitalize;
`

const ThemeSwitcher = () => {
  const theme = useSelector((state) => state.theme)
  const dispatch = useDispatch()

  useEffect(() => {
    document.body.setAttribute("data-theme", theme)
  }, [theme])

  const toggleTheme = () =>
    dispatch(setTheme(theme === "light" ? "dark" : "light"))

  return (
    <ModeSwitcher onClick={toggleTheme}>
      {theme === "light" ? (
        <IoMoonOutline size="14px" />
      ) : (
        <IoMoon size="14px" />
      )}{" "}
      <span style={{ marginLeft: "0.75rem" }}>{theme}</span>
    </ModeSwitcher>
  )
}

export default ThemeSwitcher
