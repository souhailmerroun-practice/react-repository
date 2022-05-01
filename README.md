# Authentification Firebase

## prerequisites

## deployment environment

### development

run `npm install` to install dependencies

https://github.com/souhailmerroun-practice/react-repository/blob/878180342ce00cc92f3f5662446fd07dc09189e7/package.json#L5-L22

create `.env` from `.env.example` and fill out the FIREBASE_ variables

https://github.com/souhailmerroun-practice/react-repository/blob/ba1ef7e5bdd51249729716bc1ebc6423ce57140b/.env.example#L1-L6

run `npm start`

https://github.com/souhailmerroun-practice/react-repository/blob/878180342ce00cc92f3f5662446fd07dc09189e7/package.json#L24

### production

## usage

### routing

A routing is in place at 

https://github.com/souhailmerroun-practice/react-repository/blob/878180342ce00cc92f3f5662446fd07dc09189e7/src/index.tsx#L27

https://github.com/souhailmerroun-practice/react-repository/blob/878180342ce00cc92f3f5662446fd07dc09189e7/src/App.tsx#L24-L29

### errors

Erros are reported to sentry at

https://github.com/souhailmerroun-practice/react-repository/blob/878180342ce00cc92f3f5662446fd07dc09189e7/src/index.tsx#L11-L19

https://github.com/souhailmerroun-practice/react-repository/blob/878180342ce00cc92f3f5662446fd07dc09189e7/src/App.tsx#L34

### authentication

Firebase config is for setup at

https://github.com/souhailmerroun-practice/react-repository/blob/878180342ce00cc92f3f5662446fd07dc09189e7/src/authentification/config/firebase.tsx#L8

The context is setup at 

https://github.com/souhailmerroun-practice/react-repository/blob/878180342ce00cc92f3f5662446fd07dc09189e7/src/authentification/context/FirebaseContext.tsx#L42-L64

it is used at 

https://github.com/souhailmerroun-practice/react-repository/blob/878180342ce00cc92f3f5662446fd07dc09189e7/src/authentification/pages/Login.tsx#L10

https://github.com/souhailmerroun-practice/react-repository/blob/878180342ce00cc92f3f5662446fd07dc09189e7/src/authentification/pages/Register.tsx#L10

https://github.com/souhailmerroun-practice/react-repository/blob/878180342ce00cc92f3f5662446fd07dc09189e7/src/components/NavBar.tsx#L10