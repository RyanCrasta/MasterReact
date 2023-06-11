## What is the difference between Named Export, Default export and * as export?

- ES6 provides two ways to export a module from a file: named export and default export.
- With **named exports**, one can have multiple named exports per file. Then import the specific exports they want surrounded in braces. The name of imported module has to be the same as the name of the exported module.
![image](https://github.com/RyanCrasta/MasterReact/assets/65001186/37c904e1-0e0d-4a99-a180-de0deda4550d)

- One can have only one **default export** per file. The naming of import is completely independent in default export and we can use any name we like. When we import we have to specify a name and import like:
![image](https://github.com/RyanCrasta/MasterReact/assets/65001186/6cdec913-fcc2-4c1a-b6c6-7a6e98b76d47)

- `import * as somename` imports all the named exports which you can call the method or component by using the dot operator and the alias name

## What is the importance of config.js file

- Make a habit of adding constant values in the config.js file, instead of duplicating the same values in multiple files which is not a good practice because if the need arises of changing some value you would have to change it in each and every file. Whereas if you maintain a config.js file just change this one file once and you are all set.

## What are React Hooks?

- Before React Hooks (React < 16.8), developer's were required to write class components in order to take advantage of certain React Features.
- Hooks are basically functions that let us include react state and lifecycle features without using Classes, and organise the logic inside a component into reusable, isolated units.
