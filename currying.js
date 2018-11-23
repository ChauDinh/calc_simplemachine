const add = a => b => a + b;

const add5 = add(5);
add5(6);
console.log(add5(6));

const songs = [
 { id: 4, name: 'The Faded' },
 { id: 5, name: 'As long as you love me' },
 { id: 6, name: 'All our of love' }
];

console.log(songs.map(item => item.id));
console.log(songs.map(e => e.name));

const get = attr => item => item[attr];

const getId = get('id'); // curried
const getName = get('name'); // curried

console.log(songs.map(getId));
console.log(songs.map(getName));