import "./../node_modules/turkuaz/turkuaz.min.css"
import './App.css';

import UserCard from "./components/UserCard"
import Form from "./components/Form"

export const userArr = [
  {
    "id": 0,
    "name": "Ömer",
    "title": "Frontend-Dev",
    "link": "https://omergulcicek.com"
  },
  {
    "id": 1,
    "name": "Ayşe",
    "title": "Backend-Dev",
    "link": "omergulcicek.com"
  },
  {
    "id": 2,
    "name": "Zeki",
    "title": "Frontend-Dev",
    "link": "omergulcicek.com"
  }
]

function App() {
  return (
    <>
    <section>
      <UserCard users={userArr} />
    </section>

    <section>
      <Form />
    </section>
    </>
  );
}

export default App;
