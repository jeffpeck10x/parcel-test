To recreate possible parcel bug:

```sh
yarn install

yarn dev
# go to http://localhost:5000/, everything works, yay!

yarn build
yarn serve-static-dev
# go to http://localhost:5000/, "Uncaught ReferenceError: Log is not defined"
```