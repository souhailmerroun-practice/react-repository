# tests

1/

```
pre-commit run --all-files
```

2/

```
act
```

3/

```
docker run \
  --rm \
  --platform linux/amd64 \
  --interactive --tty \
  --volume $(pwd):/e2e \
  --workdir /e2e \
  cypress/included:3.2.0
```
