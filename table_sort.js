let catsArray = [];

const cat = function (cat_name, cat_weight, cat_color, cat_gender, cat_age) {
    this.name = cat_name;
    this.weight = cat_weight;
    this.color = cat_color;
    this.gender = cat_gender;
    this.age = cat_age;
    this.toArray = function () {
        catsArray.push(this)
    };
    this.toArray();
}



let cat1 = new cat('Thomas', 10, 'grey', 'male', 8);
let cat2 = new cat('Kitty', 5, 'red', 'female', 2);
let cat3 = new cat('Max', 6, 'white', 'male', 12);
let cat4 = new cat('Angel', 3, 'black', 'male', 1);
let cat5 = new cat('Bella', 4, 'white', 'female', 5);
let cat6 = new cat('Tabby', 7, 'whiskas', 'male', 2);
let cat7 = new cat('Daisy', 3, 'beige', 'female', 5);
let cat8 = new cat('Misty', 5, 'grey', 'female', 3);
let cat9 = new cat('Spotty', 8, 'spotted', 'male', 6);
let cat10 = new cat('Tiger', 9, 'red', 'male', 4);

for (i = 0; i < catsArray.length; i++) {
    let props = Object.values(catsArray[i]);
    let tbody = document.getElementById('tbody');
    let row = document.createElement('tr');
    for (k = 0; k < 5; k++) {
        let cell = document.createElement('td');
        let text = document.createTextNode(props[k]);
        cell.appendChild(text);
        row.appendChild(cell);
    }
    tbody.appendChild(row);
}

const propSorting = (prop) => {
    return function (x, y) {
        return x[prop] > y[prop] ? 1 : x[prop] < y[prop] ? -1 : 0;
    }
}
//const propSorting = (prop) => (x, y) => +(x > y) || +(x === y) - 1);
//????? const propRevSorting = (prop) => (a, b) => +(b > a) || +(b === a) -1);
//const propSorting = (prop) => (x, y) => x[prop] > y[prop] ? 1 : x[prop] < y[prop] ? -1 : 0;

/*let sortNames = propSorting('name');
let sortWeights = propSorting('weight');
let sortColors = propSorting('color');
let sortGenders = propSorting('gender');
let sortAges = propSorting('age');*/

const propRevSorting = (prop) => {
    return function (a, b) {
        return b[prop] > a[prop] ? 1 : b[prop] < a[prop] ? -1 : 0;
    }
}
/*
let sortRevNames = propRevSorting('name');
let sortRevWeights = propRevSorting('weight');
let sortRevColors = propRevSorting('color');
let sortRevGenders = propRevSorting('gender');
let sortRevAges = propRevSorting('age');*/