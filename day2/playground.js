var name = 'Ram';
var age = 30;
var hasHobbies = true;

function summarizeUser(userName, userAge, userHasHobbies) {
    return('Name is ' + userName + ', age is ' + userAge + ' and user has hobbies ' + userHasHobbies)
}
console.log(summarizeUser(name, age, hasHobbies));








const person = {
    name: 'Ram',
    age: 30,
    hasHobbies: true,
    hello () {
        console.log('Hi I am ' + this.name);
    }
}
// console.log(person);
person.hello();









const hobbies = ['PlayCricket', 'Coding', 'Traveling'];
// for ( let hobby of hobbies) {
//     console.log(hobby);
// }

console.log(hobbies.map(hobby => 'Hobby: ' + hobby));

hobbies.push('Programming');
console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
console.log(hobbies);

const coppiedArray = hobbies.slice(0,0);
console.log(coppiedArray);

const coppieDArray = [hobbies];
console.log(coppieDArray);

const coppiEDArray = [...hobbies];
console.log(coppiEDArray);

// const toArray = (...args) => {
//     return[arg1, arg2, arg3]
// }
// console.log(toArray(1,2,3,4,5,6));








const Person = {
    Name: 'Sham',
    Age: 34,
    Hello(){
        console.log('Hi, I am ' + this.Name);
    }
}

const printName = (personData) =>{
    console.log(personData.Name);
}
printName(Person);

const prinTName = ({Name}) =>{
    console.log(Name);
}
printName(Person);

const hobbieS = ['Cooking', 'Programming'];
const [hobby1, hobby2] = hobbieS;
console.log(hobby1, hobby2);









// Async Code
// const fetchData = callback =>{
//     setTimeout(()=>{
//         callback('Done^^^');
//     },1500)
// }

const fetchData = () =>{
    const promise = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('Done^^^');
        },1500)
    })
}

setTimeout(()=>{
    console.log('Timer is done~~~');
    fetchData().then(text=>{
        console.log(text);
    })
},2000)
console.log('Hello World');









