# create index.html
touch index.html

# create package.json with defaults
npm init --yes

# Install server
npm install --save-dev lite-server

change package.json

"scripts": {
  "lite": "lite-server"
}

#start server
npm run lite


### install typescript
npm install --save-dev typescript typings

## touch typescript configuration and typings config
touch tsconfig.json typings.json

#add this to tsconfig

{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "moduleResolution": "node",
    "sourceMap": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "removeComments": false,
    "noImplicitAny": false
  }
}

# install typings
# tells typescript about packages
npm install -g typings
typings install dt~core-js dt~jasmine dt~node --save --global

#typings.json will be changed by now

package.json should look like this: 
{
  "name": "ng2-start",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "tsc && concurrently \"npm run tsc:w\" \"npm run lite\"",
    // uses concurrently to run multiple commands at once. it runs typescript, checks for changes, and starts the server.
    "lite": "lite-server",
    "tsc": "tsc",
    "tsc": "tsc", // complies typscript
    "tsc:w": "tsc -w", // watch for changes then runs complies typescript
    "typings": "typings",
    "postinstall": "typings install" // install typings
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "concurrently": "^2.2.0",
    "lite-server": "^2.2.2",
    "typescript": "^1.8.10",
    "typings": "^1.3.3"
  }
}

# tsconfig looks like

{
  "compilerOptions": {
    "target": "es5", // es6 code will be complied down to es5
    "module": "commonjs",
    "moduleResolution": "node", // can go look into node modules folder to resolve any module resolutions
    "sourceMap": true, // to create source maps
    "emitDecoratorMetadata": true, // decorators are a simple way to add metadata to functions. emitted for now
    "experimentalDecorators": true,
    "removeComments": false,
    "noImplicitAny": false // just a typescript config
  }
}

angular dependencies:
npm install core-js reflect-metadata zone.js rxjs@5.0.0-beta.12 systemjs --save

angular packages:
npm install @angular/core @angular/common @angular/compiler @angular/platform-browser @angular/platform-browser-dynamic @angular/forms @angular/http @angular/router --save



