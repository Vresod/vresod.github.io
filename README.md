
# vresod.github.io

This is my personal portfolio website. It can be accessed at [vresod.xyz](https://vresod.xyz) as of right now.

## Building / Usage

This project is built in Node.JS using [Parcel](https://github.com/parcel-bundler/parcel). It uses [Bootstrap](https://github.com/twbs/bootstrap) and [Icons](https://github.com/twbs/icons).

To start, make sure you install dependencies:
```sh
npm i
```

### Testing

Development is done using Parcel's hot-reload feature. To start the test server:
```sh
npm start
```
This runs the command `parcel serve src/index.html --public-url / --dist-dir dist`. Because of [a bug](https://github.com/parcel-bundler/parcel/issues/8615) in parcel, I recommend running it in a loop to prevent your workflow from being interrupted, using
```pwsh
while(1) {npm start}
```
in PowerShell, or
```sh
while true; do npm start; done
```
in POSIX shell.
### Building

Building a production build is also simple; simply run:
```sh
npm run build
```
This runs the command `parcel build src/index.html --public-url / --dist-dir dist`.

After running the command, you will find the complete build in the `dist/` directory. If you have previously run the testing server in the same directory, I would recommend deleting the `dist/` directory before running the build command, because they both use it, and the testing server doesn't clean up after itself.

## Licensing

Copyright &copy; 2024 Luke Binkofsky. The content of this website is available for use under the [CC-BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) license unless otherwise noted, and the code is available under the MIT License unless otherwise noted. See [LICENSE.md](https://github.com/Vresod/vresod.github.io/blob/new/LICENSE.md) for more details.