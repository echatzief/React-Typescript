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

type Combinable =  number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(f1: Combinable ,f2: Combinable ,resultType: ConversionDescriptor){
  let result 
  if(typeof f1 === "number" && typeof f2  === "number" ){
    result = f1 + f2;
  } else {
    result  = f1.toString() + f2.toString();
  }

  if(resultType === "as-number"){
    result = Number(result)
  } else {
    result = String(result);
  }
  return result;
}

const combinedAges = combine("30","26","as-number");
console.log(combinedAges)