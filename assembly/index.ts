// The entry file of your WebAssembly module.
import "allocator/arena";
export { memory };

export function add(a: i32, b: i32): i32 {
  return a + b;
}

export function hello(name: string): string {
  return 'Hello, ' + name;
}
