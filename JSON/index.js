//Stringifying names into JSON String
const names = ["SpongeBob", "Squidward", "Patrick", "Sandy"];
const namesJSONString = JSON.stringify(names);

console.log(names);
console.log(namesJSONString);

const person = {
    "name" :"SpongeBob",
    "age" : 30,
    "isEmployed" : true,
    "hobbies" : ["JellyFishing", "Karate", "Cooking"]
}

console.log(person);
const personJSON = JSON.stringify(person);
console.log(personJSON);

const jsonNames = `["SpongeBob", "Squidward", "Patrick", "Sandy"]`;

const jsonPerson = `{"name" :"SpongeBob", "age" : 30, "isEmployed" : true, "hobbies" : ["JellyFishing", "Karate", "Cooking"]}`;

const jsonPeople = `[{"name" :"SpongeBob","age" : 30,"isEmployed" : true},
                    {"name" :"Squidward","age" : 50,"isEmployed" : true},
                    {"name" :"Patrick","age" : 34,"isEmployed" : false},
                    {"name" :"Sandy","age" : 35,"isEmployed" : false}]`;
                
                //backticks convert it into string
            
console.log(jsonNames);

const parsedData = JSON.parse(jsonNames);
console.log(parsedData);

console.log(jsonPerson);
const parsedData2 = JSON.parse(jsonPerson);
console.log(parsedData2);

console.log(jsonPeople);
const parsedData3 = JSON.parse(jsonPeople);
console.log(parsedData3);

fetch("names.json")
    .then(response => response.json())
    .then(value => console.log(value));

fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.name)));