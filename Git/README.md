# kodluyoruz-git-denemeleri

git config --global --list (git'in kullanıcı bilgilerini verecek)
git config --global user.name "" (git username değişikliği)
git config --global user.email "" (git email değişikliği)

git checkout XXX (XXX branchine geçiş yapar)
git checkout -b  XXX (XXX branchini oluşturur sonra geçiş yapar)

git fetch (diğer branchleri çeker)
git pull (kodun son güncel halini çeker)

# GIT SENARYOSU

1. git clone <gitlinki> - (bir kez yapılıyor)

(yeni branch açmadan önce mutlaka master/main'de **git pull** çalıştırıp kodun güncel halini çekiyoruz)

2. git checkout -b <branchadi>
git checkout -b kodluyoruz-001-header-yapilacak

3. git status (değişiklik olan dosyaları listeler)

4. git add * (tüm değişiklikleri yollar)
git add .
git add <fileName>
git add README.md

5. git commit -m "ne yaptığını burada anlat"

6. git remote add origin <gitlinki> - (bir kez yapılıyor)

7. git push -u origin  (kodu yollar)

8. site arayüzünde pull requets (PR) açılacak

9. takım arkadaşı yada takım lideriniz önce code review yapacak, ardından merge'yecek (kodu birleştirecek)