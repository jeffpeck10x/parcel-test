To recreate possible parcel bug:

```sh
git clone https://github.com/jeffpeck10x/parcel-test.git
cd parcel-test
yarn install

yarn dev
# go to http://localhost:5000/, everything works, yay!

yarn build
yarn serve-static-dev
# go to http://localhost:5000/, "Uncaught ReferenceError: Log is not defined"
```