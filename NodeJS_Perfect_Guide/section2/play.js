const person = {
  name: "Max",
  age: 29,
  greet() {
    console.log('Hi, I am ' + this.name);
  }
}

const copiedPerson = {...person};
console.log(copiedPerson);

const hobbies = ['Sports', 'Cooking'];
// for (let hobby of hobbies) {
//   console.log(hobby);
// }
// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// console.log(hobbies);

// 복사
// const copiedArrray = hobbies.slice();
const copiedArrray = [...hobbies];
console.log(copiedArrray);

const toArray = (...args) => {
  return args;
}

console.log(toArray(1, 2, 3, 4));