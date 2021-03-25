var person;
person = {
    name: "Maximilian",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};
person.hobbies.map(function (h) { return console.log(h); });
person.role.map(function (r) { return console.log(r); });
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var anotherPerson;
anotherPerson = {
    name: "Jack",
    age: 20,
    hobbiles: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
console.log(anotherPerson);
function combine(f1, f2) {
    if (typeof f1 == "string") {
        return f1 + f2;
    }
    return f1 + f2;
}
var combinedAges = combine("Max: ", 26);
console.log(combinedAges);
