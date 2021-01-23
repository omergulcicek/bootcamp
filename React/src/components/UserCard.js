import Button from "./Button"

function UserCard({users}) {
  var resultHtml = [];
  
  users.forEach(({id,name, title, link}) => {
    resultHtml.push(<div className="col-12 col-sm-6 col-lg-4" key={id}>
      <div className="box mb-4">
      <figure>
        <img src="https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png" alt="user" width="40" />
      </figure>

      <div>
        <strong>{name}</strong>
        <span className="d-inline-block mb-3">{title}</span>

        <Button link={link}>
          Siteyi Önizle
        </Button>
      </div>
    </div>
    </div>
    );
  })

  return (
    <div className="row">
      {resultHtml}
    </div>
  )
}

export default UserCard