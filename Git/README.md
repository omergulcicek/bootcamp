# Git

git config --global **--list** (git'in kullanıcı bilgilerini verecek)

git config --global **user.name** "" (git username değişikliği)

git config --global **user.email** "" (git email değişikliği)

git checkout XXX (XXX branchine geçiş yapar)

git checkout **-b**  XXX (XXX branchini oluşturur sonra geçiş yapar)

git **fetch** (diğer branchleri çeker)

git **pull** (kodun son güncel halini çeker)

***

## Git senaryosu

- git **clone** <gitlinki> - *(bir kez yapılıyor)*

(yeni branch açmadan önce mutlaka master/main'de **git pull** çalıştırıp kodun güncel halini çekiyoruz)

- git **checkout -b** <branchadi>
  
*Örnek Branch* git checkout -b kodluyoruz-001-header-yapilacak

- git status *(değişiklik olan dosyaları listeler)*

- git add * *(tüm değişiklikleri yollar)*

git add .*(tüm değişiklikleri yollar)*

git add <fileName> *(sadece <fileName>'i yollar)*
  
*Örnek* git add README.md

- git **commit -m** "ne yaptığını burada anlat"

- git **remote add origin** <gitlinki> - *(bir kez yapılıyor)*

- git **push -u origin**  *(kodu yollar)*

- site arayüzünde pull requets (**PR**) açılacak

- takım arkadaşı yada takım lideriniz önce **code review** yapacak, ardından **merge**'yecek (kodu birleştirecek)
