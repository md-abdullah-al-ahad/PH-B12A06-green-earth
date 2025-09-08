# PH-B12A06-green-earth

# What is the difference between var, let, and const?

Ans: In Javascript there are three ways to declare variables. Var is the old way of doing it before ES6 and let and const are introduced in ES6. Though all of them are used to declare variables there are differences between them such as scope, hoisting, and the way of declaration.

Var - Var is function scoped but if the variable that is declared with var not inside a function it is globally scoped. hat means if var is declared at the top, it can be accessed anywhere in the program. Also, it is hoisted that means that If I try to log a variable before it has been declared, it will show undefined. Then, if I assign something to it and log it again, it will show the assigned value. Also, redeclaration of var is possible. Var is not used anymore.

Let - let is block scoped, which means variables declared with let cannot be accessed outside the block where they were declared. Let variables are also hoisted but it is not initialized which means if we try to access a variable before initializing them it will throw a ReferenceError, which is also called the Temporal Dead Zone (TDZ). Variables declared with let can not be redeclared but it can be reassigned. That means we can change the value of a variable if we use the let keyword.

Const - Const is also block scoped and hoisted but not intialized just like the let keyword variable. It also has the temporal dead zone(TDZ). he only difference between const and let is that let variables can be reassigned, while const variables cannot. This means variables declared with const cannot be redeclared or reassigned..

# What is the difference between map(), forEach(), and filter()?

Ans: map - map lets us change each element of an existing array and modify it according to a function and then create a new array with the modified values. For example,

```js
const nums = [1, 2, 3];
const squareNums = nums.map((num) => num * num);
```

The above code will create a new array squareNums with the squares of the entry of the array nums

forEach() - This also works similar to the map method but it does not return anything. t just performs operations by iterating.. For example,

```js
const nums = [1, 2, 3];
nums.forEach((num) => console.log(num * num));
```

filter() - This will also return an array, but the new array will only consist of the elements that pass the condition specified in the function. For example,

```js
const nums = [1, 2, 3, 4];
const evenNums = numbers.filter((num) => num % 2 === 0);
```

In the new evenNums array there will be numbers that passes the filtration specified in the function.

# What are arrow functions in ES6?

Ans: Arrow functions are a new way of writing functions which was introduced in ES6. With arrow functions, we can write functions using shorter syntax. If the function have only one line we can also remove the {}. For example,

```js
function add(a, b) {
  return a + b;
}

const add = (a, b) => a + b;
```

# How does destructuring assignment work in ES6?

Ans: Destructuring lets us get values from arrays or objects and assign them into variable in a modern way which has shorter syntax. For example,

```js
const nums = [1, 2, 3];
const [a, b, c] = nums;
```

Here a, b, and c will have the values 1, 2, and 3 respectively.

Let's say we don't want the middle number. We can do

```js
const [x, , y] = nums;
```

Here x will have 1 and y will have 3.

We can also set default values by which we can eliminate the case of having undefined values in the variable.

```js
const [a, b, c, d = 4] = [1, 2, 3];
```

Here d will have the value 4 and if fourth element is present in the array then it will be assigned to that value.

In the same way, we can do this for objects. We can also assign default values.

```js
const student = { name: "Abdullah", dept: "CSE" };
const { name: studentName, dept: studentDept } = student;
```

Here, studentName will have the value "Abdullah" and studentDept will have the value "CSE".

We can also do this by using the same property name to the variable

```js
const { name, dept } = student;
```

Here name will have the value "Abdullah" and dept will have the value "CSE".

# Explain template literals in ES6. How are they different from string concatenation?

Ans: In string concatenation, we have to use many + operators to create the desired string. But the same thing can be done by using template literals where we create a template and dynamically insert the values we need. Also, with template literals we can use JavaScript expressions inside the dynamic placeholders. Also, we can create multi line strings just by going to a new line no need to use \n like before. For example,

```js
"I am " + name + " a student of " + deptName + "department.";
```

This can be done by using template literal:

```js
`I am ${name} a student of ${deptName} department.`;
```

For multiline,

```js
console.log("Line One\n" + "Line Two");
```

This is the concatenation way of doing it.

```js
console.log(`Line one
Line Two`);
```

This is the template literal way.
