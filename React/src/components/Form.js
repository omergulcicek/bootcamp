import React, { useState } from "react"
import Button from "./Button"

function Form() {
  const [date, setDate]         = useState(new Date().toLocaleTimeString())
  const [count, setCount]       = useState(0)
  const [username, setUsername] = useState()
  const [password, setPassword] = useState("")

  const [like, setLike] = useState(16)
  const [unlike, setUnlike] = useState(4)

  // State - setState - HOOK

  const ctaControl = () => {
    const cta = document.getElementById("kayit-ol"),
          usernameInput = document.getElementById("kullanici-adi"),
          passwordInput = document.getElementById("parola")
  
    if(usernameInput.value !== "" && passwordInput.value.length > 3) {
      cta.removeAttribute("disabled")
    }
    else {
      cta.setAttribute("disabled", true)
    }
  }

  const controlUserName = (e) => {
    setUsername(e.target.value)
    ctaControl()
  }

  const controlPassword = (e) => {
    const p = e.target.value
    setPassword(p)

    const parola = document.getElementById("parola")

    if(p.length > 3) {
      parola.classList.remove("is-invalid")
      parola.classList.add("is-valid")
    }
    else {
      parola.classList.remove("is-valid")
      parola.classList.add("is-invalid")
    }
    
    ctaControl()
  }

  setInterval(
  () => setDate(new Date().toLocaleTimeString())
  ,
  1000)


  return (
    <>
      <div className="youtube">
        <p>
          <a onClick={function() { return setLike(like+1)}}>
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="thumbs-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-thumbs-up fa-w-16 fa-2x"><path fill="currentColor" d="M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z" class=""></path></svg>
           ({like})
          </a>
        </p>

        <p>
          <a onClick={() => setUnlike(unlike+1)}>
            Olumsuz ({unlike})
          </a>
        </p>
        <p>
          Sonuç: {like - unlike}
        </p>
      </div>

      <div>
        <h1>Form</h1>

        <p>
        Count: { count }
        </p>
        <p>
          Kullanıcı adınız: { username }
        </p>
        <p>
        Parolanız: { password }
        </p>
        <p>
        Anlık Saat: { date }
        </p>

        <a className="button" onClick={() => setDate(new Date().toLocaleTimeString())}>Saati güncelle</a>

        <a className="button is-primary" onClick={() => setCount(count + 1)}>
          Arttır
        </a>
        <a className="button is-primary" onClick={() => setCount(count - 1)}>
          Azalt
        </a>

        <a className="button is-primary" onClick={() => setCount(0)}>
          Sıfırla
        </a>

        <Button size="is-small" onClick={() => setCount(count + 1)}>
          { count }
        </Button>
      </div>

      <div className="mt-5">
        <div className="form-field">
          <label>Kullanıcı Adı</label>
          <input type="text" placeholder="Kullanıcı adı" className="input" value={username} id="kullanici-adi" onChange={controlUserName} />

          <small className="input-text">Boş geçilemez</small>
        </div>
        
        <div className="form-field">
          <label>Parolanız</label>
          <input type="password" id="parola" placeholder="Parola" className="input" value={password} onChange={controlPassword} />
          <small className="input-text">En az 3 karakter</small>
        </div>
      </div>

      <p>
        <a className="button is-large is-success" id="kayit-ol" disabled>Kayıt Ol</a>
      </p>
    </>
  )
}

export default Form


/*
  let count = 0;

  function setCount(parametre) {
    count = parametre
  }

document.getElementById("button").addEventListener("click", function() {
  count.innerText = parseInt(count.innerText) + 1

  setCount(count + 1)
})


EcmaScript 6 - arrow Function
() => console.log(count)


function topla (a, b) {
  return a+b
}

(a, b) => a+b

() = parametre
=> return

function deneme() {

}

export function deneme2() {

}

const deneme3 = 5
const deneme4 = function() {

}

const deneme5 = () => {
  
}

*/