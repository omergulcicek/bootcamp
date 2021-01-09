//#region değişkenler-if-else
var ad = "Ömer"; //string
var yas = 28; //integer
var boy = 1.88; //float
var erkek = true; //boolean

// EcmaScript 6
let a = "değiştirilebilir değişken"
const a = "değişmeyecek değişken"

// if - else
var sayi = 20;
if(sayi < 21) {
  alert("sayi 21den küçük");
}
else if(sayi < 15) {
  alert("sayi 15ten küçükten");
}
else {
  alert("yanlış");
}

var sayi = 20;
if(sayi == 20) {
  alert("doğru");
}
else {
  alert("yanlış");
}

//=== üç eşittir tip kıyaslaması da yapar

var erkekmi = true;
if(erkekmi) {
  alert("erkek");
}
else {
  alert("kadın");
}

//mod
if(i%2 === 0) {

}
//#endregion

//#region tek mi çift mi
var arr = [1, 10, 8, 95];
var ciftToplam = 0;
var tekToplam = 0;

for(var i=0; i<arr.length; i++) {
  if(arr[i]%2 === 0) {
    ciftToplam += arr[i];
  }
  else {
    tekToplam += arr[i];
  }
}

console.log("çift sayıların toplamı " + ciftToplam);
console.log("tek sayıların toplamı " + tekToplam);
//#endregion

//#region tahmin oyunu
var tahmin;
var hak = 3;
var sonuc = 15;

debugger
for(var i=10; i<hak; i++) {
  tahmin = prompt("Bi sayı tahmin et");
  if(tahmin == sonuc) {
    alert("BAŞARILI" + (i+1) + ". denemede bulduk");
  }
  else if(tahmin>sonuc) {
    alert("küçült "+ (hak-i-1)+ "hakkın kaldı");
  }
  else {
    alert("büyült "+ (hak-i-1)+ "hakkın kaldı");
  } 
}
//#endregion