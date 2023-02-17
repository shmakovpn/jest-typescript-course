// src/index.spec.ts
describe('Our application', () => {
  test('logs to console', async () => {
    // тест асинхронный
    const patchedLog = jest.spyOn(console, 'log'); // вешаем monkey patch
    patchedLog.mockImplementation(() => {}); // подменяем реализацию на функцию, которая ничего не делает

    // дождаться пока закончится динамический импорт, 
    // прежде чем идти на следующую строчку
    await import('./index'); 
    expect(patchedLog).toBeCalledTimes(1);
    expect(patchedLog).toBeCalledWith('Hello World from typescript');
    patchedLog.mockRestore(); // удаляем monkey patch
  });
});

describe('Other test', () => {
  test('console.log', () => {
    console.log('I want to be printed!!');
  });
});
