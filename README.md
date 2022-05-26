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

```
npm start
```