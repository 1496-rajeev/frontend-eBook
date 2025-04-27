const cardDataJs = [
  {
    id: 1,
    title: "Let, Const and Var",
    description: "",
    cta: "Explore",
  },
  {
    id: 2,
    title: "Filter and it's polyfill",
    description: "",
    cta: "Explore",
  },
  {
    id: 3,
    title: "Map and it's polyfill",
    description: "",
    cta: "Explore",
  },
  {
    id: 4,
    title: "forEach and it's polyfill",
    description: "",
    cta: "Explore",
  },
];

const topicWiseDataJs = [
  {
    id: 1,
    content: [
      {
        title: "let",
        description: `Block-scoped (only lives inside {}). Can be updated, but not re-declared in the same scope. Not hoisted like var (it’s in a 'temporal dead zone')`,
        code: `{
let x = 10;
console.log(x); // can be accessible inside block only
} 
console.log(x) // can not accessible, Because outside of block`.trim(),
      },
      {
        title: "Const",
        description:
          "Also block-scoped. Must be initialized when declared. Can’t be reassigned, but objects/arrays can still be mutated",
        code: `{
const x = 10;
console.log(x); // can be accessible inside block only
x = 11 // Can’t be reassigned
} 
console.log(x) // can not accessible, Because outside of block`.trim(),
      },
      {
        title: "var",
        description:
          "Function-scoped. Can be re-declared and updated. Hoisted (but not initialized)",
        code: `function testVar() {
  var x = 1;
  if (true) {
    var x = 2; // same variable!
    console.log(x); // 2
  }
  console.log(x); // 2
}
console.log(x) // outside function not accessible
`.trim(),
      },
    ],
  },
  {
    id: 2,
    content: [
      {
        title: "Array filter",
        description:
          "filter is an Array method which return new array containing those elements which pass the condition",
        code: `// {
const originalArray = [1,2,3,6,45,8,9,30,5]
const filteredArray = originalArray.filter((ele,_)=>ele>7)
console.log(filteredArray); // output [45,8,9,30] 
console.log(originalArray) // [1,2,3,6,45,8,9,30,5]`.trim(),
      },
      {
        title: "Filter polyfill",
        description:
          "Filter polyfill is custom javascript code for Array.prototype.filter",
        code: `// {
  Array.prototype.myFilter = function(callback){
    result = []
    for(let i=0; i<this.length;i++){
      if(callback(this[i],i,this)){
        result.push(this[i])
      }
    }
    return result
  }
  const originalArray = [1,2,3,6,45,8,9,30,5]
  const filteredArray = originalArray.myFilter((ele,_)=>ele>7) // here myFilter is custom javascript code
  console.log(filteredArray); // output [45,8,9,30] 
  console.log(originalArray) // [1,2,3,6,45,8,9,30,5]`.trim(),
      },
    ],
  },
  {
    id: 3,
    content: [
      {
        title: "Array Map",
        description:
          "Map is an Array method which transform each element and return a new array with same length of array",
        code: `// {
const originalArray = [1,2,3,6,45,8,9,30,5]
const mappedArray = originalArray.map((ele,_)=>ele+1)
console.log(mappedArray); // output [2,3,4,7,46,9,10,31,6]
console.log(originalArray) // [1,2,3,6,45,8,9,30,5]`.trim(),
      },
      {
        title: "Map polyfill",
        description:
          "Map polyfill is custom javascript code for Array.prototype.map",
        code: `// {
  Array.prototype.myMap = function(callback){
    result = []
    for(let i=0; i<this.length;i++){
        result.push(callback(this[i],i,this))
    }
    return result
  }
  const originalArray = [1,2,3,6,45,8,9,30,5]
  const mappedArray = originalArray.myMap((ele,_)=>ele+1) // here myMap is custom javascript code
  console.log(mappedArray); // output [2,3,4,7,46,9,10,31,6]
  console.log(originalArray) // [1,2,3,6,45,8,9,30,5]`.trim(),
      },
    ],
  },
  {
    id: 4,
    content: [
      {
        title: "Array forEach",
        description:
          "forEach is an Array method which perform an action on each element — but it does not return anything",
        code: `// {
const originalArray = [1,2,3,6,45,8,9,30,5]
const forEachArray = originalArray.forEach((ele,_)=>ele+1) 
console.log(forEachArray); // output undefined
console.log(originalArray) // [1,2,3,6,45,8,9,30,5]`.trim(),
      },
      {
        title: "forEach polyfill",
        description:
          "forEach polyfill is custom javascript code for Array.prototype.forEach",
        code: `// {
  Array.prototype.myForEach = function(callback){
    for(let i=0; i<this.length;i++){
       (callback(this[i],i,this))
    }
  }
  const originalArray = [1,2,3,6,45,8,9,30,5]
  const forEachArray = originalArray.myForEach((ele,_)=>{console.log(ele+1)}) // here forEach is custom javascript code
  console.log(forEachArray); // output undefined
  console.log(originalArray) // [1,2,3,6,45,8,9,30,5]`.trim(),
      },
    ],
  },
];

export { cardDataJs, topicWiseDataJs };
