// encapsulation.ts
// обход инкапсуляции

/** Эмулирует поход в базу данных, возвращает полученные данные */
function getDataFromDb(): string {
  return 'db_data';
}

/** Валидация данных из базы */
export function isDataValid(): boolean {
  const data = getDataFromDb();  // получаем данные из базы
  if(data.length > 4) {
    // проверяем условие валидации
    return true;
  }
  return false;
}
