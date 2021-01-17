import './App.css';
import "./../node_modules/turkuaz/turkuaz.min.css"

import UserCard from "./components/UserCard"

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
    </>
  );
}

export default App;
