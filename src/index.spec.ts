// src/index.spec.ts
const patchedLog = jest.spyOn(console, 'log'); // вешаем шпиона
patchedLog.mockImplementation(() => {}); // подменяем реализацию на функцию, которая ничего не делает

import './index'; // добавим импорт

describe('Our application', () => {
  // Подкорректируем описание группы тестов "Наше приложение"
  test('logs to console', () => {
    // Подкорректируем описание самого теста "пишет лог в консоль"
    // Полное описание теста звучит, как утверждение "Наше приложение пишет лог в консоль"
    expect(patchedLog).toBeCalledTimes(1); // проверяем, что console.log вызывался ровно 1 раз
    expect(patchedLog).toBeCalledWith('Hello World from typescript');
  });
});
