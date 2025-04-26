const cardDataReact = [
  {
    id: 1,
    title: "useMemo and it's Polyfill",
    description: "",
    cta: "Explore",
  },
];

const topicWiseDataReact = [
  {
    id: 1,
    content: [
      {
        title: "useMemo React",
        description: `useMemo memoizes(cache) the result of a computation to avoid recalculating unless dependencies change`,
        code: `
{/* 
Here memoizedVal will be cached if the value of a and b will be same. 
*/}

const memoizedVal = useMemo(()=>{
                          return a + b
                      },[a,b]);
`.trim(),
      },
      {
        title: "useMemo Polyfill",
        description: `useMemo with Javascript Function`,
        code: `
{/*>>>>>>>>>>>*/}
function meMoized(func){
    const cache = new Map()
    return (...args)=>{
              const key = JSON.stringify(...args)
              if(cache.has(key)){
                    console.log("return memoized value")
                     return cache.get(key)
              }else{
                    cache.set(key,func(...args))
                    console.log("return calculated value")
                    return cache.get(key)
              }
    }
}
  const add=(a,b)=>a+b
  const AddTwoNumber = meMoized(add)
  console.log(AddTwoNumber(2,3)) // it will calculate because 1st time call
  console.log(AddTwoNumber(2,3)) // it will return memoized value
    `.trim(),
      },
    ],
  },
];

export { cardDataReact, topicWiseDataReact };
