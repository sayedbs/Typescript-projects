"use strict";
var player = /** @class */ (function () {
    // name: string;
    // private age: number; // default public, and define private or readonly; it's called access modifire
    // category: string;
    function player(name, age, category) {
        this.age = age;
        this.category = category;
        // this.name = name;
        // this.age = age;
        // this.category = category;
    }
    return player;
}());
var sakib = new player("Sakib", 34, 'A');
var masrafi = new player("Masrafi", 41, 'A');
var players = []; // object type players
//console.log(sakib.name); // public poperty accessed 
players.push(sakib, masrafi);
//# sourceMappingURL=main.js.map