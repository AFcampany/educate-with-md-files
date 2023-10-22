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

## 06 Type annotations with array

```ts
let all: string | number = "osama"

all = "a" // no problem
all = 100 // no problem
all = true // error
```
- when you mix array types is normal but when use function for one type other not the error will be come
```ts
// here no problem the type script andrstand the type of array is (string | number)
let myFriends = ['osama', 'ahmed', 'sayed', 10]

for(let i = 0; i < myFriends.length; i++){
  // this will be a error number.repeat() is not a function
  console.log(myFriends[i].repeat(3)) 
}
```
- chose the type of array like this:
```ts
// here is error 10 is of type number and array of type string
let myFriends: string[] = ['osama', 'ahmed', 'sayed', 10]

for(let i = 0; i < myFriends.length; i++){
  // here not problem all elements must be a string
  console.log(myFriends[i].repeat(3)) 
}
```