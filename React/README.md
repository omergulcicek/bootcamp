# Bootcamp - React

## `npm install`

Projeyi klonladıktan sonra `npm install` ile projeyi kuruyoruz.

### `npm run start`

Projeyi kurduktan sonra `npm run start` komutu ile ayağa kaldırılır.

[http://localhost:3000](http://localhost:3000) linkinden çıktı görülebilir.

***
***
***

## React Ödevi

Verilen `headerLinks` dizisi, `<Header />` componenti oluşturularak döngü ile basılacak.

```js
const headerLinks = [
  {
    "id": 1,
    "title": "Ana Sayfa",
    "link": "/"
  },
  {
    "id": 2,
    "title": "Yazılar",
    "link": "/blog"
  },
  {
    "id": 3,
    "title": "Projeler",
    "link": "/projects"
  },
  {
    "id": 4,
    "title": "Hakkımda",
    "link": "/about"
  }
]
```

Kullanıcının adını alan bir input olacak.

Kullanıcı değer girdikçe `<UserCard />` componenti güncellenecek.

```App.js``` componentinin içerisi şu yapıda olacaktır;

```jsx
<>
  <Header links={headerLinks} />
  
  <main>
    <input />
    
    <UserCard name={name} />
  </main>
</>
```

![React ödevi](https://omergulcicek.com/img/kodluyoruz-odev.png)

***
***
***

## Bitirme Projesi

[https://raw.githubusercontent.com/omergulcicek/bootcamp/master/React/data.json](https://raw.githubusercontent.com/omergulcicek/bootcamp/master/React/data.json)
