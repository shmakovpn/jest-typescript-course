// encapsulation.spec.ts
import * as encapsulationModule from './encapsulation';

it('can mock encapsulation', () => {
  const getDataFromDb = (encapsulationModule as any).__get__('getDataFromDb');

  expect(getDataFromDb()).toEqual('db_data');
});
