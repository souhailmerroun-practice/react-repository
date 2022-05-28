# development

1/

```
docker run \
  --rm \
  --interactive --tty \
  --volume $(pwd):/usr/src/app \
  --workdir /usr/src/app \
  --publish 3000:3000 \
  node:latest \
  bash
```

https://github.com/souhailmerroun-practice/react-repository/blob/523ca7331431eebedb0fa8e658f9a902bd231563/package.json#L19-L24

```
npm run start
npm run test
npm run build
```

http://localhost:3000

2/

```
docker run \
  --rm \
  --interactive --tty \
  --volume $(pwd):/usr/src/app \
  --workdir /usr/src/app \
  --publish 6006:6006 \
  node:latest \
  bash

npm run storybook
```

http://localhost:6006
