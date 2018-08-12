let catsArray = [];
let sorted = false;


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


const propSorting = (arr, prop) => {
    arr.sort(
        function (x, y) {
            return x[prop] > y[prop] ? 1 : x[prop] < y[prop] ? -1 : 0;
        }
    );
}

const propRevSorting = (arr, prop) => {
    arr.sort(
        function (a, b) {
            return b[prop] > a[prop] ? 1 : b[prop] < a[prop] ? -1 : 0;
        }
    );
}

//const sortNames = () => {propSorting(catsArray, 'name')} 

//sortWeights = propSorting('weight');
//sortColors = propSorting('color');
//sortGenders = propSorting('gender');
//sortAges = propSorting('age');


//sortRevNames = propRevSorting(catsArray, 'name');
//sortRevWeights = propRevSorting('weight');
//sortRevColors = propRevSorting('color');
//sortRevGenders = propRevSorting('gender');
//sortRevAges = propRevSorting('age');


let cat1 = new cat('Thomas', 10, 'grey', 'male', 8);
cat2 = new cat('Kitty', 5, 'red', 'female', 2);
cat3 = new cat('Max', 6, 'white', 'male', 12);
cat4 = new cat('Angel', 3, 'black', 'male', 1);
cat5 = new cat('Bella', 4, 'white', 'female', 5);
cat6 = new cat('Tabby', 7, 'whiskas', 'male', 2);
cat7 = new cat('Daisy', 3, 'beige', 'female', 5);
cat8 = new cat('Misty', 5, 'grey', 'female', 3);
cat9 = new cat('Spotty', 8, 'spotted', 'male', 6);
cat10 = new cat('Tiger', 9, 'red', 'male', 4);



//propSorting(catsArray, 'name');
//propSorting(catsArray, 'color');
const removeTable = () => {
    let el = document.getElementById('tbody');
    el.remove();
    let tbody2 = document.createElement('tbody');
    tbody2.setAttribute('id', 'tbody');
    let table = document.querySelector('#table');
    table.appendChild(tbody2);
}

const sortTable = (p) => {
    removeTable();
    if (sorted === false) {
        propSorting(catsArray, p);
        sorted = true;
    } else {
        propRevSorting(catsArray, p);
        sorted = false;
    }
    createTable();

}


/*
const sortTable_names = () => {
  removeTable();
  propSorting(catsArray, 'name');
  createTable();
}

const sortTable_weights = () => {
  removeTable();
  propSorting(catsArray, 'weight');
  createTable();
} 
*/

const createTable = () => {
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
}

/*
const onClick = () => {
  let buttons = document.querySelectorAll('btn');
  for (i = 0; i<buttons.length; i++) {
    buttons[i].addEventListener('click', sortTable)
  }
}*/


let btn_name = document.getElementById('name');
btn_name.addEventListener('click', function () {
    sortTable("name")
});

let btn_weight = document.getElementById('weight');
btn_weight.addEventListener('click', function () {
    sortTable("weight")
});

let btn_color = document.getElementById('color');
btn_color.addEventListener('click', function () {
    sortTable("color")
});

let btn_gender = document.getElementById('gender');
btn_gender.addEventListener('click', function () {
    sortTable("gender")
});

let btn_age = document.getElementById('age');
btn_age.addEventListener('click', function () {
    sortTable("age")
});

createTable();




//const propSorting = (prop) => (x, y) => {return +(x[prop] > y[prop]) || +(x[prop] === y[prop]) - 1};
//const propRevSorting = (prop) => (a, b) => {return +(a[prop] < b[prop]) || +(b[prop] === a[prop]) -1};

/*
let sortNames = propSorting('name');
   


let sortRevNames = propRevSorting('name');
   
/*
const propSorting = (prop) => {
    return function (x, y) {
        return x[prop] > y[prop] ? 1 : x[prop] < y[prop] ? -1 : 0;
    }
}

const propRevSorting = (prop) => {
    return function (a, b) {
        return b[prop] > a[prop] ? 1 : b[prop] < a[prop] ? -1 : 0;
    }
}*/