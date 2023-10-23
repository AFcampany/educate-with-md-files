### 03 Create configuration and watch files

  to compile typescript file to javaScript file

    tsc index.ts

  - in watch mode every single change will updated automatically

  for start compiling in watch mode:

    tsc -w index.ts

for create  a new tsconfig.json file:

    tsc --init

  inside tsconfig.json change some options:
  
```json
  "rootDir": "./src",
  "outDir": "./dist",
  "removeComments": true,
  "sourceMap": true, // for debugging
```

### 04 statically vs dynamically typed

### 05 Type Annotations & Any Type

```typescript
let theName: string = "elezero"
let theAge: number = 40
let hire: boolean = true
let all: any = "elzero"
let allTyepes // the type will be any
let str = "elzero" // the type will be string 
theName = 100 // type problem
all = 100 // no problem
```
  in functions you must anntate the type of parameters
```ts
function add(n1: number, n2: number) {
  return n1 + n2
}
console.log(add(10, "20")) //error
console.log(add(10, 20)) // return 30
```

### 06 Type annotations with array
  you can use more than one type for a variable:
```ts
let all: string | number = "osama"

all = "a" // no problem
all = 100 // no problem
all = true // error
```
 when you mix array types is normal but when use function for one type other not the error will be come:
```ts
// here no problem the type script andrstand the type of array is (string | number)
let myFriends = ['osama', 'ahmed', 'sayed', 10]

for(let i = 0; i < myFriends.length; i++){
  // this will be a error number.repeat() is not a function
  console.log(myFriends[i].repeat(3)) 
}
```
chose the type of array like this:
```ts
// here is error 10 is of type number and array of type string
let myFriends: string[] = ['osama', 'ahmed', 'sayed', 10]

for(let i = 0; i < myFriends.length; i++){
  // here not problem all elements must be a string
  console.log(myFriends[i].repeat(3)) 
}
```

### 07 Type annotation with multidimensional array

do this:
```ts
let array: (string | string[])[] = ['anis', ['anis', 'younes']]
let array2: string[][] = [['anis']]
```

### 08 type annotation with function

in functions when you don't write explicit types the editor will show you a problem but when use noImplicitAny the problem gone
```json
  "noImplicitAny": false,
```
in function you can handle implicit return with noImplicitReturns
```json
  "noImplicitReturns": true, // will warn you if that missed return in function
```
in function you can handle no used local variables to warn you if a local variable not used
```json
  "noUnusedLocals": true,
```
same as noUnusedParameters warn you if that a parameter not used inside function:
```json
  "noUnusedParameters": true
```
return type
```ts
function add(n1: number, n2: number) : number {
  return n1 + n2 //no problem
  return `${n1} + ${n2}` // error the type must be number not string
}
```

### 09 Optional and default parameters

parameters in function is not optional
```ts
function showData(name: string, age: number, country: string) {
  return `${name} - ${age} - ${country}`
}

console.log(showData('osama')) // error you must pass all arguments
```
then you must define default values if you need
```ts
function showData(name: string, age: number = 17, country: string = 'eygpt') {
  return `${name} - ${age} - ${country}`
}

console.log(showData('osama')) // no problem => osam - 17 - eygpt
```

you use optional operator (?)

```ts
function showData(name: string, age?: number, country?: string) {
  return `${name} - ${age} - ${country}`
}

console.log(showData('osama')) // no problem => osam - 17 - eygpt
```

### 10 Function Rest Parameters


```ts
function addAll(...nums: number[]) : number {
  let result = 0
  // for (let i = 0; i < nums.length; i++) {
  //   result += nums[i]
  // }
  nums.forEach((num) => result += num)
}
console.log(add(10, 20, 100, 10.5, +true)) // float is under type number no problem
```

### 11 Anonymous and arrow function

    not hard!
### 12 Type alias

  you can set a type alias as abbriviation

```ts
type st = string
let name: st = '' // no problem

type stAndNum = string | number
let all: stAndNum = 10 // No error
all = '' //No error
all = true // problee
```
### 13 type alias advanced

you can add type for object and object properties

```ts
type Buttons = {
  up: string,
  right: string,
  down: string,
  left: string,
}

type Last = Bottons & {
  x: boolean
}

function getActions(btns: Buttons) {
  console.log(`Action for button up is ${btns.up}`)
  console.log(`Action for button right is ${btns.right}`)
  console.log(`Action for button down is ${btns.down}`)
  console.log(`Action for button left is ${btns.left}`)
}

getActions({ up: 'jump', right: 'go right', down: 'go down', left: 'go left'})
```
### 14 Literal types

example:
```ts
type nums = 0 | 1 | -1

// function compare(num1: number, num2: number) : nums { ... }

function compare(num1: number, num2: number) : 0 | 1 | -1 {
  if(num1 === num2) return 0
  if(num1 > num2) return 1
  if(num1 < num2) return -1
}
```

### 15 tuple

- is another sort of array type
- knows exactly how many elements is contains
- we knows which types it contains at specific positions

```ts
let article: [number, string, boolean] = [11, 'title one', true] // this is tuple
article = [12, 'title two', false] // no problem
article = ['12', 'title two', false] // error
article.push(100) //no problem you can add 4th item
```
you can force 3 items and prevent push in array:

```ts
let article: readonly [number, string, boolean] = [11, 'title one', true]
article = [12, 'title two', false] // no problem
article.push(100) // error
```

### 16 data types void and never

- void
  - function that will return nothing
  - function in Javascript that not return a value will show undefined
  - undefined in not void

```ts
const logging = (msg: string) : void => {
  console.log(msg)
  return // void is same as undefined?
}
```

- never
  - return type never returns
  - the function doesn't have a normal completion
  - it throws an error or never finishes running at all 'infinte loop'

```ts
const fail = (mst: string) : never => {
  throw new Error(msg);
  return 10; // <= this is unreachable code the function never return
}
```
example 2:
```ts
// if you use type never and the function return you will get warning
const alwaysLog = (name: string) : never => {
  while(true) {
    console.log(name)
  }
}
```

### 17 enums part 1

- enums => enumerations
  - Allow us to declare a set of named constants
  - used for logical grouping collection of constants 'collection of related vlues
  - it organize your code
  - by default dnums are number based, first element is 0
  - theres a numeric enums
  - Theres a string-based enums
  - Theres heterogeneous enums [string + number]

  simple constants declaration: 
```ts
const KIDS    = 15
const EASY    = 9
const MEDIUM  = 6
const HARD    = 3
```
 using enums
```ts
enum Level {
  Kids    = 15,
  Easy    = 9,
  Meduim  = 6,
  Hard    = 3
}

let lvl: string = 'Easy'
if('Easy' === lvl) {
  console.log(`The Level Is ${lvl} And Number Of Seconds Is ${Level.Easy}`)
}
```

### 18 Enums part 2

- Enum can refer to other enum
- Enum can refer to same enum
- Enum can have calculations
- Enum can have Functions
- **const enum has another declaration code**
  - to disable the const enum code to normal code use preserveConstEnums
```json
  "preserveConstEnums": true,
```
you can use enums like this:
```ts
enum Kids {
  Five  = 25,
  Seven = 20,
  Ten   = 15,
}
enum Level {
  Insane, // the value is 0 by default
  Kid     = Kids.Ten,
  Easy    = 9,
  Meduim  = Easy  - 3, // value is Meduim = Easy - 3 = 6
  Hard    = getHard()
}

function getHard() {
  return 3
}

let lvl: string = 'Easy'
if('Easy' === lvl) {
  console.log(`The Level Is ${lvl} And Number Of Seconds Is ${Level.Easy}`)
}
```

### 19 Type Assertions

- Sometime Compiler Doesnt Know the Information we do
- Typescript is not performing any check to make sure type assertion is valid

example:
```ts
let myImg = <HTMLImageElement> document.getElementById('my-img') // Or
let myImg = document.getElementById('my-img') as HTMLImageElement
console.log(myImg.src)
console.log(myImg.value) // error HTMLImageElement doesn't have property vlue
```

example 2: 
```ts
let myImg = document.getElementById('my-img') as HTMLInputElement
console.log(myImg.src) // error HTMLImageElement doesn't have property vlue
console.log(myImg.value) 
```

example 3:
```ts
let data: any = '1000'
console.log((data as string).repeat(3))
```

### 20 Union and intersection types

- Union type
  - the | symbole is used to create the union => or
- Intersection type
  - is a type that combines sevral types into one
  - the symbole & is used  to create an intersection => and
- If a union is an or, then an intersection is an and

```ts
type A = {
  one: string,
  two: number,
  three: boolean,
}

type B = A & {
  four: number
}

type C = {
  five: boolean
}

type mix = A & C

function getActionsA(btns: A) {
  console.log(`Hello ${btns.one}`)
  console.log(`Hello ${btns.two}`)
  console.log(`Hello ${btns.three}`)
}
getActionsA({ one: 'string', two: 100, three: true })

function getActionsB(btns: B) {
  console.log(`Hello ${btns.one}`)
  console.log(`Hello ${btns.two}`)
  console.log(`Hello ${btns.three}`)
  console.log(`Hello ${btns.four}`)
}
getActionsB({ one: 'string', two: 100, three: true, four: 100 })


function getActionsMix(btns: mix) {
  console.log(`Hello ${btns.one}`)
  console.log(`Hello ${btns.two}`)
  console.log(`Hello ${btns.three}`)
  // console.log(`Hello ${btns.four}`) // if your use it it false
  console.log(`Hello ${btns.five}`)

}
getActionsMix({ one: 'string', two: 100, three: true, five: false })
```
### 21 Type annotations with object
  example:
  ```ts
  let myObject: {
    readonly username: string, // you can't change the username property
    id: number,
    hire?: boolean, // you can use ? for set property optional
    skills: {
      one: string,
      two: string,
    }
  } = {
    username: 'Elzero',
    id: 100,
    // hire: true,
    skills: {
      one: 'html',
      two: 'css',
    }
  }
  ```
### 22 Interface Declaration

- serve like types
- The interface describes the shape of an object
- it defines the syntax to follow

- use with object 
- use with function
- use read only and optional operator

example:
```ts
interface User {
  readonly id: number, // you can't change the value of id
  username: string,
  country?: string, // you can use ? for optional property
}

let user: User = {
  id: 100,
  username: 'elzero',
  country: 'egypt',
}
```

### 23 Interface Methods and params

example:
```ts
interface User {
  readonly id: number, // you can't change the value of id
  username: string,
  country?: string, // you can use ? for optional property
  sayHello(): string,
  sayWelcome: () => string,
  getDouble(num: number): number,
}

let user: User = {
  id: 100,
  username: 'elzero',
  country: 'egypt',
  sayHello() {
    return `Hellow ${this.username}`
  }
  sayWelcome: () => `Welcome ${this.username}`,
  getDouble(n) {
    return n * 2
  }
}
```
### 24 Interface and ReOpen

```ts
// in home page
interface Settings {
  readonly theme: boolean, // for none changing values
  font: string,
}

// in Article page
interface Settings {
  sidebar?: boolean, // to make it optional
}

// in Contatc page
interface Settings {
  external: boolean,
}

// in other page you can use all properties
let userSettings: Settings = {
  theme: true,
  font: 'Open Sans',
  sidebar: false, // optional
  external: true,
}
```
### 25 Interface Extend

example:
```ts
interface User {
  id: number, // you can't change the value of id
  username: string,
  country: string,
}

interface Moderator {
  role: string | number,
}

interface Admin extends User, Moderator {
  protect: boolean,
}

let user: Admin {
  id: 1,
  username: 'elzero',
  country: 'egypt',
  role: 'mod',
  protect: true,
}
```
### 26 Interface final discussion
  interafce is better then type alias
  - advantage of interface re-open
  - advantage of interface extends

### 27 Class type annotation
example: 
```ts
class User {
  user: string
  salary: number
  msg: () => string
  constructor(username: string, salary: number) {
    this.name = username
    this.salary = salary
    this.message = function () {
      return `Hello ${this.name} Your salary is ${this.salary}`
    }
  }
  sayMsg(){
    return `Hello ${this.name} Your salary is ${this.salary}`
  }
}
let user = new User('elzero', 6000)
```
### 28 Class access modifiers
example: 
```ts
class User {
  private user: string
  protected salary: number
  msg: () => string
  constructor(username: string, salary: number) {
    this.name = username
    this.salary = salary
    this.message = function () {
      return `Hello ${this.name} Your salary is ${this.salary}`
    }
  }
  sayMsg(){
    return `Hello ${this.name} Your salary is ${this.salary}`
  }
}
let user = new User('elzero', 6000)
```

another sysntax with some midification:
```ts
class User {
  msg: () => string
  // here will use this.username = username automaticaly no need to write it
  constructor(private username: string,protected salary: number, public readonly address: string) {
    this.message = function () {
      return `Hello ${this.username} Your salary is ${this.salary}`
    }
  }
  sayMsg(){
    return `Hello ${this.username} Your salary is ${this.salary}`
  }
}
let user = new User('elzero', 6000, 'cayro')
```

### 29 class accessors

example:
```ts
class User {
  msg: () => string
  // here will use this.username = username automaticaly no need to write it
  constructor(private _username: string,public salary: number, public readonly address: string) {
    this.message = function () {
      return `Hello ${this._username} Your salary is ${this.salary}`
    }
  }
  sayMsg(){
    return `Hello ${this._username} Your salary is ${this.salary}`
  }
  public get username(): string {
    return this._username
  }
  public set username(value: string) {
    this._username = value
  }
}
let user = new User('elzero', 6000, 'cayro')
user.username = 'ahmed' // how to change value with setter
let name: string = user.username // how to get value with getter
```

### 30 Class static members

```ts
class User {
  private static created: number = 0
  static getCount(): string {
    return `${User.created} Objects created`
  }
  constructor(public username: string) {
    User.created++
  }
}

let user1 = new User('elzero')
let user2 = new User('anis')
let user3 = new User('osama')
let num: number = User.getCount()
```
same but with getter and setter
```ts
class User {
  private static _created: number = 0
  constructor(public username: string) {
    User._created++
  }

  public static get created(): number {
    return User._created
  }
  public static set created(value: number) {
    User._created = value
  }
}

let user1 = new User('elzero')
let user2 = new User('anis')
let user3 = new User('osama')
let num: number = User.getCount()
```
### 31 class implements interface
example: 
```ts
interface Settings {
  theme: boolean,
  font: string,
  save(): void;
}

class User implements Settings {
  constructor(public username: string, public theme: boolean, public font:string){}
  save(): void {
    console.log(`saved`)
  }
  update(): void {
    console.log(`update`)
  }
}

let User = new User(`elzero`, true, `open sans`)
```
### 32 abstract class and members
- we cannot create an instance of an abstract class

example: 
```ts
abstract class Food {
  constructor(public title: string) {}
  abstract getCookingTime(): void
}

class Pizza extends Food {
  constructor(title: string, public price: number) {
    super(title)
  }
  getCookingTime(): void {
    console.log(`cooking time for pizza is 1 hour`)
  }
}

class Burger extends Food {
  constructor(title: string, public price: number) {
    super(title)
  }
  getCookingTime(): void {
    console.log(`cooking time for burger is half hour`)
  }
}
```

### 33 Polymorphism and method override

- polymorphism
  - classes have the same methods but different implementations
-method override
  - allowing child class to provide implementation of a method in parent class
  - a method in child class must have same name as parent class

example:
```ts
class Player {
  constructor(public name: string) {}
  attack(): void {
    console.log(`attacking now`)
  }
}

class Amazon extends Player {
  constructor(name: string, public spears: number) {
    super(name)
  }
  override attack(): { // overide attack methode
    console.log(`attacking with spear`)
    this.spears--
  } 
}

class Barbarian extends Player {
  constructor(name: string, public axeDurability: number) {
    super(name)
  }
  override attack(): {
    console.log(`attacking with axe`)
    this.axeDurability -= 5
  } 
}
```
  when turn no implict override to true you must add override key word!
```json
  "noImplicitOverride": true,
```

### 34 Generics introduction

- help write  a reusable code
- allow to pass type as a parameter to another type
- you will be able to deal with multiple types without using ': any type'
- we can create:
  - Generic classes
  - Generic Functions
  - Generic Methods
  - Generic Interfaces

example: 
```ts
returnType<T>(val: T): T {
  return val
}
// use function
console.log(returnType<number>(100))
console.log(returnType<string>('elzero'))
console.log(returnType<boolean>(true))
console.log(returnYype<number[]>([1, 2, 3, 4]))
```
### 35 Generics Multiple types

using arro function:
```ts
const returns = <T>(val: T): T => val
console.log(returns<number>(12))
```

example 2:
```ts
function test<T>(val: T): string { // accept generic type and return allways string
  return `the value is ${val} and type is ${typeof val}`
}
console.log(test<number>(100))
console.log(test<string>('elzero'))
```

example 3:
```ts
function multiple<T, S>(val1: T, val2: S): string {
  return `The first value is ${val1} and second value is ${val2}`
}
console.log(multiple<string, number>('osama', 100))
console.log(multiple<string, boolean>('osama', true))
```

### 36 Generics classes

```ts
class User <T = number>{ // set number as default type
  constructor(public value: T) {}
  show(msg: T): void {
    console.log(`${msg} - ${this.value}`)
  }
}

let userOne = new User<string>('elzero')
userOne.show('elzero')
let userTwo = new User<number | string>(100) // here add string for show method it show Generic and the generec is defferent then string and if you want string you must add it
userTwo.show(`string`)
```

### 37 Generics and interfaces

```ts
interface Book {
  itemType: string,
  title: string,
  isbn: number,
}

interface Game {
  itemType: string,
  title: string,
  style: string,
  price: number,
}
class Colleaction {
  public data: T[] = []
  add(item: T): void {
    this.data.push(item)
  }
}

let itemOne = new Collection<Book>()
itemOne.add({itemType: `book`, title: 'follow your heart', isbn: 23445})
itemOne.add({itemType: `book`, title: 'attomic habits', isbn: 25890})

let itemTwo = new Collection<Game>()
itemTwo.add({ itemType: 'game', title: 'uncharted', style: 'action', price: 59})
```
### 38 end and how to master typescript

learn JSDocs
Ts config