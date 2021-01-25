import { NavLink } from "react-router-dom"

import "./../css/header.css"

function Header({links}) {
  const resultHtml = []

  links.forEach(({ link, id, title }) => {
    resultHtml.push(<NavLink exact to={link} key={id}>{title}</NavLink>)
  })

  return <>
    <header>
      <nav>
        {resultHtml}
      </nav>
    </header>
  </>
}

export default Header