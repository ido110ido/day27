//EX1
//1
const person = {
    name: 'ido',
    age: 23,
    schoolYears: 12,
    location: 'hadera'
}
const returnKeys = (obj) => Object.keys(obj)
console.log(returnKeys(person));
//2
const keysToUpper = (obj) =>{
    let newObj = {}
    for(let [key , value] of Object.entries(obj)){
        newObj[key.toUpperCase()] = value
    }
    return newObj
}
console.log(keysToUpper(person));
//3
const returnValues = (obj) => Object.values(obj)
console.log(returnValues(person));
//4
const doubleValue = (obj) =>{
    let newObj = {}
    for(let [key , value] of Object.entries(obj)){
        typeof value === 'number'? 
        newObj[key] = value*2 :
        newObj[key] = value;
    }
    return newObj
}
console.log(doubleValue(person));
//5
const reversObject = (obj) =>{
    let newObj = {}
    for(let [key , value] of Object.entries(obj)){
        newObj[value] = key
    }
    return newObj
}
console.log(reversObject(person));
//6
const sunOfValue = (obj) =>{
    let sum = 0
    for(let value of Object.values(obj)){
        if(typeof value === 'number') sum += value;
    }
    return sum
}
console.log(sunOfValue(person));
//7
const avregeValue = (obj) =>{
    let sum = 0
    let numOfVal = 0
    for(let value of Object.values(obj)){
        if(typeof value === 'number'){
            sum += value;
            numOfVal++
        }
    }
    return sum/numOfVal
}
console.log(avregeValue(person));
//8
const keyOrderAlphabet = (obj) =>{
    let keys = Object.keys(obj).sort()
    let newObj = {} 
    keys.forEach((key) => newObj[key] = obj[key])
    return newObj
}
console.log(keyOrderAlphabet(person));
//9
const people = { 
    person1: { name: "John", age: 25 },
    person2: { name: "Mike", age: 32 },
    person3: { name: "Sara", age: 28 },
};
const checkIfPersonExist = (obj, nameOfPerson) =>{
    let PersonExist = false
        Object.values(obj).forEach((person) =>{
            if(person.name.toUpperCase() === nameOfPerson.toUpperCase()){
                PersonExist = true;
            } 
        })
    return PersonExist
}
console.log(checkIfPersonExist(people, "Mike"));
//19
const wordFrequency = (arr) =>{
    return arr.reduce((acc,curentVal) =>{
        acc[curentVal] = (acc[curentVal] || 0) + 1;
        return acc
    },{})
}
let words = ["apple","banana", "cherry", "orange", "apple", "banana", "grape", "lemon"];
console.log(wordFrequency(words));
//20

const doubleValueReduce = (obj) =>{
    // console.log(Object.key(obj));
    return Object.keys(obj).reduce((acc,curentVal) =>{
        if(typeof obj[curentVal] === 'number'){
            acc[curentVal] = obj[curentVal]*2
        }
        else{
            acc[curentVal] = obj[curentVal]
        }
        return acc
    },{})
}
const newPerson = doubleValueReduce(person)
console.log(newPerson);
//21
const replaceKey = (curentKey, newKey, obj) =>{
    return Object.keys(obj).reduce((acc,curentVal) =>{
        if(curentVal === curentKey){
            acc[newKey] = obj[curentVal]
        }
        else{
            acc[curentVal] = obj[curentVal]
        }
        return acc
    },{})
}
const newPersonreplace = replaceKey('name','king',person)
console.log(newPersonreplace);