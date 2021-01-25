import "./../css/button.css"

function Button({ children }) {
  return <>
    <a href="/" className="btn">
      { children }
    </a>
  </>
}

export default Button