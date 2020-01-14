### Instal VS Code

```bash
sudo snap install --classic code
```

### Install & configure GIT

```bash
sudo apt install git
sudo apt install git-gui

git config --global user.email "ulti_lambda212@protonmail.com"
git config --global user.name "ultilambda212"
```

### Install Node & NPM

```bash
curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash -
sudo apt-get install -y nodejs
node -v # v13.5.0
npm -v # 6.13.4
```

### Install MongoDB

```bash
sudo apt-get install mongodb
```

### App skeleton

```bash
# install express-generator
sudo npm install -g express-generator

# project dir
mkdir ~/Desktop/tw
cd ~/Desktop/tw

# generate an app skeleton
# express vezi: https://expressjs.com/
# ejs vezi: https://github.com/mde/ejs
express --ejs --git 

# add dependencies
npm install express-ejs-layouts --save # vezi: https://github.com/Soarez/express-ejs-layouts
npm install tingodb --save # vezi: https://github.com/sergeyksv/tingodb

# install dependencies in package.json
npm install
```

### Init GIT

```bash
git init
git gui # stage files, write commit message, click commit
```

### Run dev app

```bash
DEBUG=myapp:* npm start
xdg-open http://localhost:3000
```
### Adaugare Mongo driver

1. npm install mongodriver si sa fie salvata in package json
2. in app.js conectare cu driver-ul la baza de date mongo
3. adaugare conexiune in app locals conform tutorialului

### HTTP pe scurt

A. Browserul trimite la server un HTTP Request
   Alcatuit din: URI (hostname + path), Headere si Body.

B: Procesare Express (pe baza de middleware.):
1. HTTP Requestul e parsat din text intr-un obiect JS de tip Expres Reqest (aka "req")
2. "req" trece prin request middlewares care i-l modifica succesiv (parsare cookies etc)
3. ajunge la router, care pe baza URI path-ului si a definitiilor de rute, ruteaza la un handler
4. handlerul proceseaza requestul si formeaza un obiect JS de tip Express Response (aka "res")
5. "res" trece prin response middleware care-l modifica succesiv (adaugare layout etc)
6. "res" este transformat in text tip HTTP Response (headere + body)

C: Serverul proceseaza si trimite inapoi un HTTP Response
   Alcatuit din: Headere si Body.

### EJS

Default layout: layouts/marketing
Setare layout in render: res.render("view", {layout: 'layouts/app'})

### Inscriere

1. sign_up form onSubmit ia datele si le trimite prin ajax la POST /users
















