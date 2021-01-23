function Button({ link, type, size, children, onClick }) {
/*
  { link, type, size }

  const link = props.link;
  const type = props.type;
  const size = props.size;
  let children = props.children;

  const { link, type, size } = props;

  state = varriable
  props = varriable

  props readonly
  
  var a = 3
  let state.a = 3
  state.a = 5

  const a = 3
*/

  return <>
    <a href={link} className={`button ${type} ${size}`} onClick={onClick}>
      {
        children
      }
    </a>
  </>
}

export default Button;