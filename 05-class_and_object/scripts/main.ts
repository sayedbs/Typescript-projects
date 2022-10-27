class player {
    // name: string;
    // private age: number; // default public, and define private or readonly; it's called access modifire
    // category: string;
    constructor(
        name: string,
        private age: number,
        readonly category: string,
    ) {
        // this.name = name;
        // this.age = age;
        // this.category = category;
    }
}

const sakib = new player("Sakib",34,'A');
const masrafi = new player("Masrafi",41,'A');

const players : player[] =[]; // object type players

//console.log(sakib.name); // public poperty accessed 

players.push(sakib, masrafi);

