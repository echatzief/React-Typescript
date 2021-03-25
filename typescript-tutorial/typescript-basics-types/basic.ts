let person: {
  name: string,
  age: number,
  hobbies: string[],
  role:[number,string]
}
person = {
  name: "Maximilian",
  age:30,
  hobbies: ['Sports','Cooking'],
  role: [2,'author']
};

person.hobbies.map(h=> console.log(h))
person.role.map(r=>console.log(r))

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

let anotherPerson:{ 
  name: string,
  age: number,
  hobbiles: string[],
  role: number 
}

anotherPerson ={
  name: "Jack",
  age: 20,
  hobbiles: ['Sports','Cooking'],
  role: Role.ADMIN 
}

console.log(anotherPerson)

function combine(f1:number | string ,f2:number){
  if(typeof f1 == "string"){
    return f1+f2;
  }
  return f1 + f2;
}

const combinedAges = combine("Max: ",26);
console.log(combinedAges)