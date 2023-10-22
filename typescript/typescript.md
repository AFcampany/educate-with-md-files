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