# Some AssemblyScript stuff

Simple example how to use WASM in node.js projects.

1. run `npm install` or `yarn`;
2. check out the code, `index.js` contains the node code that uses wasm files. `assembly/index.ts` contains the AssemblyScript code that is compiled to WebAssembly.
3. Run `npm run asbuild` or `yarn run asbuild` to compile to code to webassembly.
4. Run `node index.js` to see the magical "Hello, Motley" string to appear.
