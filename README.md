# reactjs

## requirements

[Docker Desktop](https://www.docker.com/products/docker-desktop)

```
docker --version
```

```
docker run \
  --rm \
  --interactive --tty \
  --volume $(pwd):/usr/src/app \
  --workdir /usr/src/app \
  --publish 3000:3000 \
  node:latest \
  bash

node -v
npm -v
npx -v
```
source: [docker node container](https://github.com/souhailmerroun-practice/Docker/blob/main/npm-install.sh)

## deployment environment

### development

https://github.com/souhailmerroun-practice/react-repository/blob/523ca7331431eebedb0fa8e658f9a902bd231563/package.json#L19-L24

```
npm run start
npm run test
npm run build
```