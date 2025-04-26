const cardDataJs = [
  {
    id: 1,
    title: "Let, Const and Var",
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
];

export { cardDataJs, topicWiseDataJs };
