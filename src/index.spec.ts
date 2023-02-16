// src/index.spec.ts
const argsHistory: any[] = []; //
const print = console.log; // надо оставить нашему тесту возможно вывода на терминал
const resultFixture = 'Hello world from typescript'; // ожидаемый результат
// делаем monkey patch
console.log = (...args) => {
  argsHistory.push(args);
};

import './index'; // импортируем тестируемый файл

if (argsHistory.length === 1 && argsHistory[0].length === 1 && argsHistory[0][0] === resultFixture) {
  // argsHistory.length === 1 проверяем, что импортируемый код вызывал console.log 1 раз
  // в вызов console.log передан 1 аргумент
  // argsHistory[0][0] === resultFixture этот аргумент соответствует ожидаемому значению
  print('Test OK');
} else {
  print(`Test Failed, argsHistory="${argsHistory}"`);
}
