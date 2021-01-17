function Button({ link, type, size, children }) {
/*
  { link, type, size }

  const link = props.link;
  const type = props.type;
  const size = props.size;
  const children = props.children;

  const { link, type, size } = props;

*/
  return <>
    <a href={link} className={`button ${type} ${size}`}>
      {
        children
      }
    </a>
  </>
}

export default Button;