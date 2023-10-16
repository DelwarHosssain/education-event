LIVE LINK- 

live link - https://652ce81702104c0f7af0ddcc--fanciful-toffee-5e6b0d.netlify.app/






1.Ans: B.ReferenceError: greetign is not defined

becouse:let greeting; declares a variable named "greeting," but it does not assign any value to it, so it's initially undefined.

greetign = {}; attempts to assign an empty object to a variable named "greetign," but there is no such variable declared in the code. There's a typo in the variable name; it should be "greeting" instead of "greetign."

Since "greetign" is not defined anywhere in the code, JavaScript throws a ReferenceError, indicating that the variable is not defined.



2.Ans: B: TypeError

The function sum is defined to take two arguments, a and b, and add them together. However, when you call sum(1, "2"), you're trying to add a number (1) to a string ("2"). This is not a valid operation in JavaScript, and it will result in a TypeError. JavaScript does not automatically convert the string to a number in this case, so it throws an error.





3.ans: A: ['🍕', '🍫', '🥑', '🍔']

The code first creates an array food with four elements. Then, it defines an object info with a property favoriteFood that is initially set to the first element of the food array, which is "🍕". Later in the code, it assigns a new value "🍝" to the info.favoriteFood. This assignment only changes the value of the property in the object and does not affect the original food array. Therefore, when you console.log(food), it will still output the original array.

4.B: Hi there, undefined

The sayHi function expects an argument name, but when you call sayHi() without providing any argument, it defaults to undefined. The function then returns a string with the undefined value included, so the result is "Hi there, undefined".



5.C: 3

The forEach method iterates over each element in the nums array and executes the provided function for each element. In this case, the function checks if num is truthy (in JavaScript, 0 is considered falsy and all other numbers are truthy), and if it is, it increments the count variable by 1. Since three elements in the nums array (1, 2, and 3) are truthy, the count variable is incremented three times, resulting in a value of 3 when you console.log(count).





