"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.message = 'Use the left hand menu to move around!';
        this.listContent = [
            {
                "content": "1 - Angular is great!",
                "header": "Not actually, look above.",
                "desc": "\n        Angular 2 is a front-end component-based framework intended to make it easier for developers to create robust and dynamic user experiences. It can be installed as an npm package. Once installed, Angular 2 uses components to load separate parts of the view.\n\n        Angular 2 was designed for mobile to handle the underpowered (when compared to desktop experiences) UX. It features a really cool router document that will load different components and change the URL to make it appear as if you are traveling to different pages even though you\u2019re still on a single page application.\n\n        Angular error messages give you the entire stack trace of everything being completely broken. Enjoy finding what component that broke!\n      ",
                "img": "https://daveceddia.com/images/angular2_error.png"
            },
            {
                "content": "2 - Fully Modular Components!",
                "header": "I hope you like components!",
                "desc": "\n        It\u2019s the most basic building block of a UI in Angular 2. An Angular 2 app is just a tree of components. There are two parts to each component. The selector and the decorator.\n\n        Selectors grab the HTML element and has a template of the elements to be added to the page.\n\n        Decorators \u201Care functions that are invoked with a prefixed @ symbol, and immediately followed by a class, parameter, method or property. The decorator function is supplied information about the class, parameter or method, and the decorator function returns something in its place, or manipulates its target in some way.\u201D -Rangle.io\n      ",
                "img": "http://i.imgur.com/NfsUCPB.jpg"
            },
            {
                "content": "3 - HTML AND JS COMBINEDDDD!!",
                "header": "Not actually.",
                "desc": "\n        Angular doesn't actually properly combine HTML and JavaScript, its parses both seperately (Yes, Angular has it's own HTML Parser). This makes Angular no different from frameworks like Knockout.js. This make Angular's message reporting quote a headache, since it will through line errors starting from the template it is in, as well as Ideally, HTML and JS should be treated as a single concern.\n        ",
                "img": "https://cdn-images-1.medium.com/max/800/1*H9ErDRxJyjzhncq7L2OiwA.jpeg"
            },
            {
                "content": "4 - tl;dr",
                "header": "Screw Angular (both of them), React is the future!",
                "desc": "\n        I officially proclaim Angular (times 2) as dead.\n        It was a good run google, maybe better luck next time?\n      ",
                "img": "http://i.imgur.com/ghcAqbG.png"
            }
        ];
    }
    AppComponent.prototype.selectContent = function (content) {
        this.activeContent = content;
        console.log(this.activeContent);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: "./app/components/app.component.html",
            styles: ["\n    .jumbotron { box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2); }\n    .listnum { margin-top: 5px; }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map