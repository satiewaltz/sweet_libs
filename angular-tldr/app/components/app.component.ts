import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: "./app/components/app.component.html",
  styles: [`
    .jumbotron { box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2); }
    .listnum { margin-top: 5px; }
  `]
})

export class AppComponent {
  message = 'Use the left hand menu to move around!';
  listContent = [
    {
      "content": "1 - Angular is great!",
      "header": "Not actually, look above.",
      "desc": `
        Angular 2 is a front-end component-based framework intended to make it easier for developers to create robust and dynamic user experiences. It can be installed as an npm package. Once installed, Angular 2 uses components to load separate parts of the view.

        Angular 2 was designed for mobile to handle the underpowered (when compared to desktop experiences) UX. It features a really cool router document that will load different components and change the URL to make it appear as if you are traveling to different pages even though you’re still on a single page application.

        Angular error messages give you the entire stack trace of everything being completely broken. Enjoy finding what component that broke!
      `,
      "img": "https://daveceddia.com/images/angular2_error.png"
    },
    {
      "content": "2 - Fully Modular Components!",
      "header": "I hope you like components!",
      "desc": `
        It’s the most basic building block of a UI in Angular 2. An Angular 2 app is just a tree of components. There are two parts to each component. The selector and the decorator.

        Selectors grab the HTML element and has a template of the elements to be added to the page.

        Decorators “are functions that are invoked with a prefixed @ symbol, and immediately followed by a class, parameter, method or property. The decorator function is supplied information about the class, parameter or method, and the decorator function returns something in its place, or manipulates its target in some way.” -Rangle.io
      `,
      "img": "http://i.imgur.com/NfsUCPB.jpg"
    },
    {
      "content": "3 - HTML AND JS COMBINEDDDD!!",
      "header": "Not actually.",
      "desc": `
        Angular doesn't actually properly combine HTML and JavaScript, its parses both seperately (Yes, Angular has it's own HTML Parser). This makes Angular no different from frameworks like Knockout.js. This make Angular's message reporting quote a headache, since it will through line errors starting from the template it is in, as well as Ideally, HTML and JS should be treated as a single concern.
        `,
      "img": "https://cdn-images-1.medium.com/max/800/1*H9ErDRxJyjzhncq7L2OiwA.jpeg"
    },
    {
      "content": "4 - tl;dr",
      "header": "Screw Angular (both of them), React is the future!",
      "desc": `
        I officially proclaim Angular (times 2) as dead.
        It was a good run google, maybe better luck next time?
      `,
      "img": "http://i.imgur.com/ghcAqbG.png"
    }
  ];
  activeContent;

  selectContent(content) {
    this.activeContent = content;
    console.log(this.activeContent);
  }
}
