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
function combine(f1, f2, resultType) {
    var result;
    if (typeof f1 === "number" && typeof f2 === "number") {
        result = f1 + f2;
    }
    else {
        result = f1.toString() + f2.toString();
    }
    if (resultType === "as-number") {
        result = Number(result);
    }
    else {
        result = String(result);
    }
    return result;
}
var combinedAges = combine("30", "26", "as-number");
console.log(combinedAges);
