#Angular 2
***
##What is it?
**Angular 2** is a front-end component-based framework intended to make it easier for developers to create robust and dynamic user experiences. It can be installed as an  npm package. Once installed, Angular 2 uses components to load separate parts of the view.

React vs Angular 2:
First things first: React is a library and Angular 2 is a front end framework -- so in a way we’re comparing apples and oranges.  

But let’s compare them anyway.

[“Angular 2 continues to put “JS” into HTML. React puts “HTML” into JS”](https://medium.freecodecamp.com/angular-2-versus-react-there-will-be-blood-66595faafd51#.u4htqa941)

-React takes a more simple approach focusing on Javascript which makes for simpler code.  
However Angular 2 allows you to do more sophisticated things with less code.

-Both provide robust tools for scalability and much like the Grunt vs. Gulp debate it may be a little while before we see a clear preference emerge.


Advantages of Angular 2:
Was designed for mobile to handle the underpowered (when compared to desktop experiences) UX.  It features a really cool router document that will load different components and change the URL to make it appear as if you are traveling to different pages even though you’re still on a single page application.

##So what is Angular 2 made of?

(http://i.imgur.com/X2enHTJ.jpg)

##But what is a component?
It’s the most basic building block of a UI in Angular 2.  An Angular 2 app is just a tree of components.  There are two parts to each component.  The selector and the decorator.

**Selectors** grab the HTML element and has a template of the elements to be added to the page.

**Decorators** “are functions that are invoked with a prefixed @ symbol, and immediately followed by a class, parameter, method or property. The decorator function is supplied information about the class, parameter or method, and the decorator function returns something in its place, or manipulates its target in some way.” -Rangle.io


Check out the image below to see the flow of components to the page

(http://i.imgur.com/skEz93h.png)

##Resources

One of the best resources we found was a tutorial on [Scotch School's Website](https://school.scotch.io/getting-started-with-angular-2)

Great chart that breaks down each piece of an [Angular 2 component](https://www.ng-book.com/2/)

For a deeper dive into Angular and it’s parts check out [The Core Concepts of Angular 2]
(https://vsavkin.com/the-core-concepts-of-angular-2-c3d6cbe04d04#.17c2hfpc4)

[Websites built using Angular 2](http://builtwithangular2.com/)

***
##But if you want to just jump in head over to [Angular.io](https://angular.io/docs/ts/latest/quickstart.html) for a quick start guide

***

Or follow our outline below to create an app and have it up and running in under 5 minutes.

To build startup project

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

# Start server
npm run lite

# install typescript
npm install --save-dev typescript typings

# Touch typescript configuration and typings config
touch tsconfig.json typings.json

# Add this to tsconfig

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

# Install Typings
# Tells typescript about packages
npm install -g typings
typings install dt~core-js dt~jasmine dt~node --save --global

# Typings.json will then be created  be changed by now

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
    "tsc": "tsc", // complies typescript
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
