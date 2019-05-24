const fs = require("fs");
const loader = require("assemblyscript/lib/loader");

const myModule = loader.instantiateBuffer(fs.readFileSync("./build/optimized.wasm"), {});

const name = myModule.newString('Motley');
console.log(myModule.getString(myModule.hello(name)));
