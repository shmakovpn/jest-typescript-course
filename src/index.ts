// index.ts
export {};  // экспортируем пустой объект

interface Hello {
  from: string;
  to: string;
}
const helloWorld: Hello = {
  from: 'typescript',
  to: 'World',
};
console.log(`Hello ${helloWorld.to} from ${helloWorld.from}`);
