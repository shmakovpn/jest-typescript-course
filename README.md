# Jest typescript course

Тестирование `typescript` кода с использование `jest`.
Testing `typescript` code using `jest`.

```
Доверяй и не перепроверяй.
```

Для чего все это надо? Я же задам вопрос по другому, как стать ценным специалистом, особенно если вы новичок.
Если вы новичок, вам не доверяют.

_Хотя вопрос куда глубже, не стоит заниматься шапкозакидательством, излишне доверяя даже самому себе, вне зависимости от того новичок вы или специалист с десятилетним опытом_.

И так. Вам ненадежен. Значит за вами надо перепроверять. Перепроверять - тратить время старших коллег.

Даже если вы работаете за 0 рублей, фирма все равно несет большие издержки.
Поэтому, без опыта вас не возьмут даже _за еду_, так как попутно потребуется кормить еще и middle-а
или даже senior-а, чьи аппетиты дорого обходятся любой компании.

Если вы пишите тесты, и делаете это на хотя бы минимально достойном уровне, ваш код работает и это можно доказать.
Таким образом, за счет автоматизации бизнес процесса код-ревью, можно существенно сэкономить время старших коллег.

Ура! В списке из 10ков тысяч Junior-ов:

- имеющих примерно одинаковые запросы по зарплате,
- обладающих начальными, но уже вполне достаточными знаниями основ языка для написания хоть как-то работающего кода.

Среди бесценных специалистов, т.е. людей пока еще не представляющих какой-либо ценности.
Вы человек которому можно доверять. Поверьте senior-ы, которые будут вас собеседовать, тоже люди, им есть чем заняться помимо вас, и они не хотят страдать.

## About this way

Небольшое лирическое отступление. О пути постижения знаний, предлагаемом автором в этой книге.

Вы водите автомобиль? У вас есть права? Возможно вы хотя бы на них учились.

Основная задача занятий на полигоне с инструктором, сформировать у курсанта условные рефлексы,
довести базовые навыки до автоматизма. Водитель на дороге должен оперативно принимать
решение о повороте, обгоне, стоит ли заехать на заправку или припарковаться.
Внимание водителя сосредоточено на более стратегических задачах, чем нажатие педалей,
переключение передач или вращение руля. Водитель не открывает инструкцию по эксплуатации автомобиля
во время движения чтобы нажать на тормоз.

Когда я учился на инженера в университете, нас часто заставляли заучивать формулы.
Мы возмущались, зачем? Ведь мы инженеры, мы должны знать "где посмотреть" и зубрежка нам ни к чему.
Однако, память человека работает в тысячи раз быстрее книг и справочников, также как RAM компьютера,
по сравнению с жестким диском. Автоматизмы и условные рефлексы существенно быстрее памяти,
их быстродействие подобно регистрам процессора по отношению к RAM.

Кому нужен программист, который только и делает что google-ит и читает документацию?
Которого простое действие объединить два commit-а в git-е, установить библиотеку, создать новый пустой проект, файл или тест, погружает в ступор и google-ние. Вы бы взяли на работу человека,
который настолько медленный, пускай он даже способен найти чуть ли не все на этом свете, но потом?

Конечно, не стоит вдаваться в крайности между "все заучить" и "google-программированием".
Однако, базовые автоматизмы должны быть обязательно. Такие как: основные команды git, npm,
синтаксис самого языка и умение пользоваться отладчиком.
Сюда я также отношу способность не задумываясь начать писать новый тест.
С опытом условные рефлексы придут сами собой и глубоко отложатся где-то на подкорке головного мозга.
Если тянуть за ботву, марковка быстрее не вырастет, всему свое время. Но, лучше все таки посадить ее
в правильное место, где она быстрее вырастет сама.

Есть навыки которые лучше натренировать у себя сразу,
чтобы остальной процесс шел быстрее, мягче и эффективнее.
Если водителю все равно предстоит освоить параллельную парковку, лучше сделать это как можно раньше,
еще на полигоне. Хотя, никто не мешает, столкнувшись с ситуацией на дороге, открыть google,
найти ближайшее поле, оставить машину там, пробежавшись до офиса пешком,
в очередной раз отложив на потом "знание git-а или jest-а".

## Create project structure

Создание структуры приложения.

Первым делом создадим папку проекта. В ней будет происходить вся работа.

```bash
mkdir jest-typescript-course  # создаем папку
cd jest-typescript-course  # переходим в нее
code .  # открываем созданную папку в среде разработки VSCode
git init  # делаем папку проекта git-репозиторием
touch README.md  # создаем файл с описанием нашего проекта
touch .gitignore  # создаем конфигурационный файл исключений git-а, оставим пока его пустым.
npm init -y  # делаем папку проекта пустым nodejs пакетом
mkdir docs  # создадим папку с документацией
mkdir src  # создаем папку для файлов с исходным кодом
```

## Hello World

```bash
touch src/index.js  # создаем отправную точку. минимальное работающее приложение "Привет Мир"
code src/index.js  # открываем index.js в VSCode
```

Давайте хоть что-то, что работает, код на языке `javascript` для начала.

```js
/**
 * src/index.js
 */
console.log('Hello World');
```

Запустим код в терминале.

```bash
node src/index.js
```

Результат:

![hello world from js](docs/images/hello-world-js.png)

Если удалось получить строку `Hello World` в терминале, значит мы на правильном пути.
Идем дальше. Превратим наш код из `javascript` в `typescript` и заставим его работать.

Переименуем файл `src/index.js` в `src/index.ts`.

```bash
mv src/index.js src/index.ts  # меняем расширение файла на *.ts
code src/index.ts  # открываем полученный файл в VSCode
```

Внесем изменения в файл.

```typescript
interface Hello {
  from: string;
  to: string;
}
const helloWorld: Hello = {
  from: 'typescript',
  to: 'World',
};
console.log(`Hello ${helloWorld.to} from ${helloWorld.from}`);
```

Запустить `typescript`-код просто так уже не получиться.

![run-typescript-code-failed](docs/images/run-typescript-code-failed.png)

Давайте установим компилятор `typescript`. Но сперва сделаем коммит в систему контроля версий `git`.

```bash
git status  # текущее состояние системы контроля версий git
```

![git-status-1](docs/images/git-status-1.png)

`On branch master` - мы находимся на ветке с именем master.
`No commits yet` - у нас нет ни одного commit-а.
`Untracked files` - у нас имеются не контролируемые git-ом файлы и папки. Их имена выделены красным.
`nothing add to commit but untracked files present` - Нечего commit-ить, но есть не отслеживаемые файлы.

```bash
git add .  # добавим в снимок git текущий каталог (точка означает текущую папку)
git status  # открою маленький секрет, чем чаще вводишь git status, тем быстрее изучаешь git
```

![git-status-2](docs/images/git-status-2.png)

Мы по прежнему находимся на ветке master. `On branch master` и у нас нет commit-ов `No commits yet`.
Однако, есть изменения готовые для сохранения в commit `Changes to be committed`.
Файлы помеченные зеленым войдут в будущий коммит. Который мы обязательно сделаем очень скоро.

Не стоит переживать насчет откуда то взявшихся файлов в папке docs/images
![git-status-docs-files](docs/images/git-status-docs-files.png)
Просто, я пишу эту книгу в том же git репозитории, и git видит, как я добавляю скриншоты.
Не обращайте внимание.

Давай создадим наш первый commit. Посмотрим текущее состояние репозитория, а также историю commit-ов.

```bash
git commit -m 'first commit'
git status  # текущее состояние репозитория git
git log  # история commit-ов
```

![git-commit-1](docs/images/git-commit-1.png)

Отлично. Мы создали новый `npm` пакет (`javascript` библиотеку), попробовали что-то запускать и зафиксировали полученный результат в виде commit-а в git-репозитории.

## Установка `typescript`

Честно. Не хотел писать про столь тривиальную вещь как установка `typescript`-компилятора.
Но давайте его установим, посмотрим, что изменилось, и причем тут git.

```bash
npm install -D typescript  # менеджер javascript-пакетов (npm) установи(install) пакет для разработки (-D) с именем typescript
```

![npm-install-typescript](docs/images/npm-install-typescript.png)

`added 1 package, and ..` - добавлен новый `javascript`-пакет.

```bash
git status
```

![git-status-3](docs/images/git-status-3.png)
Теперь у нас есть:

- `Changes not staged for commit` - измененные файлы, которые не добавлены в будущий commit
- `Untracked files` - не отслеживаемые git-ом файлы и папки.

Где:

- `node_modules/` - каталог с установленными сторонними `javascript`-пакетами (мы только что установили компилятор `typescript`)
- `package.json` - конфигурационный файл нашего `javascript` пакета. О нем поговорим, чуть позже.
- `package-lock.json` - файл с информацией об установленных пакетах.

У каждого пользователя нашей программы `package-lock.json` будет свой, он будет создавать и обновляться автоматически,
при установке или обновлении нашей программы. Распространять нашу версию данного файла не имеет никакого смысла.

Также, у каждого пользователя будет свой каталог `node_modules`. Как и файл `package-lock.json`,
он будет сформирован автоматически в зависимости от версии операционной системы пользователя,
версии `nodejs` - интерпретатора `javascript`, установленной на компьютере пользователя и т.д.
Это чужой код, как правило он занимает много места, до сотен мегабайт, распространять его только мешать и вводить компьютер пользователя в заблуждение.

К счастью, у нас есть возможность подсказать системе контроля версий, чтобы она исключила из репозитория не нужные объекты.
Внесем изменения в файл `.gitignore`.

```
# .gitignore

# чужой код
node_modules/

# файлы создаваемые автоматически
package-lock.json
```

```bash
git status
```

![git-status-4](docs/images/git-status-4.png)

Ура! Мы исключили из git-а те файлы, которые мы не собирается распространять.

```bash
git diff package.json
```

![git-diff-1](docs/images/git-diff-1.png)

Вспоминайте, что мы делали две минуты назад. Правильно. Мы установили `typescript` с ключом `-D`.
Менеджер пакетов `npm` заботливо сохранил соответствующую запись в словарик `devDependencies` (зависимости для разработки).

Пора зафиксировать изменения.

```bash
git add .
git commit -m 'установлен typescript'
git status
git log -n 1  # выведем последнюю запись в истории commit-ов
```

![git-status-5](docs/images/git-status-5.png)

Теперь пришло время проверить, что `typescript` установлен.

```bash
./node_modules/.bin/tsc --version
```

![tsc-version](docs/images/tsc-version.png)

На листинге выше, мы запрашиваем версию установленного компилятора. Запрос версии программы, это довольно частый прием,
чтобы проверить, что программа установлена и способна работать. Он ничего не сломает и, как правило, работает сразу,
из коробки, не требуя конфигурационных файлов и прочих настроек.

Одна строка, а как в ней много сказано. Особенно для новичка. Разберем все более детально:

- `./node_modules/.bin/` - путь к каталогу с исполняемыми файлами, которые притащил нам пакетный менеджер `npm`,
- `tsc` - компилятор `typescript`,
- `--version` - просим `tsc` вывести его текущую версию и завершится.

Предлагаю отвлечься на минутку и порассуждать на тем, зачем такой длинный путь `./node_modules/.bin/tsc`?
Почему нельзя просто `tsc`? Давайте проверим.

```bash
tsc
```

![tsc-not-found](docs/images/tsc-not-found.png)

`Command 'tsc' not found` - команда 'tsc' не найдена. Так произошло, потому, что мы установили компилятор `typescript`
по факту в `node_modules`, а не там где операционная система ищет запускаемые файлы (`$PATH`).

```bash
echo $PATH
# echo - вывести на экран,
# $PATH - переменная окружения, список путей, где искать исполняемые файлы,
# разделенных через двоеточие
```

![echo-path](docs/images/echo_path.png)

Как видим пути к `./node_modules/.bin` в `$PATH` нет. Его можно добавить.

```bash
export PATH="./node_modules/.bin:$PATH"
echo $PATH
```

![echo-path2](docs/images/echo_path2.png)

```bash
tsc --version
```

![tsc-version2](docs/images/tsc-version2.png)

"Это, что теперь каждый раз `$PATH` менять?" - спросите вы.
Выход есть, точнее выходы:

- установить `typescript` глобально,
- автоматизировать изменение `$PATH`.

Но сперва, давайте вернем `$PATH` как было.

```bash
export PATH=$(echo $PATH | sed -re 's/\.\/node_modules\/\.bin:?//')
# sed - stream editor, потоковый редактор текста
# -re - использовать "регулярные выражения"
# s/\.\/node_modules\/\.bin:?// регулярное выражение замены. s/шаблон поиска - что менять/на что менять/
# служебные символы (точки, слэши и т.д.) должны быть экранированы, поэтому '.' становится '\.',
# а '/' -> '\/'
# ':?' означает включить символ ':' в шаблон поиска, как опциональный.
# Если в строке находится подстрока соответствующая шаблону, она заменяется, в нашем случае на пустую строку,
# т.е. удаляется
echo $PATH
```

![echo-path3](docs/images/echo-path3.png)

Попробуйте теперь выполнить `tsc --version` и убедитесь, что `tsc` снова не работает (не находится).
Установим его глобально.

```bash
npm i -g typescript
# i краткий синоним для install
# -g установить программу в глобальный контекст
tsc --version  # посмотрим версию
./node_modules/.bin/tsc --version  # посмотрим версию установленную в контекст разрабатываемого проекта
```

![npm-i-g-typescript](docs/images/npm-i-g-typescript.png)

Пока я писал эту главу. Вышла новая версия компилятора (4.9.5), вчера была 4.9.4.

Предлагаю посмотреть куда сейчас установлен `tsc`.

```bash
which tsc
```

![which-tsc](docs/images/which-tsc.png)

Внимательные читатель заменит, что путь `/home/shmakovpn/.nvm/versions/node/v16.17.0/bin` есть у меня в `$PATH`.
Ваш путь скорее всего будет отличаться, в зависимости от того, используете вы `nvm` (node version manager) или нет,
версии самого интерпретатора и прочих факторов. Сам путь значения не имеет, главное, что он есть в `$PATH`.

Представим, что я идеалист - перфекционист. Я не хочу устанавливать ничего глобально, пусть моя система останется,
как можно более чистой. С другой стороны, я разрабатываю много разных пакетов и мне важно, использовать версию
компилятора не одну на всех, а непосредственно из пакета.
В таком случае компилятор установленный глобально меня не устраивает.

```bash
npm remove -g typescript  # удалим компилятор typescript из глобального контекста
tsc --version  # проверим, что он удалился
```

![npm-remove-g-typescript](docs/images/npm-remove-g-typescript.png)

Теперь `tsc` у нас снова не работает, а вводить каждый раз `./node_modules/.bin/tsc` слишком долго.
Вводить `export PATH="./node_modules/.bin:$PATH"` каждый раз при запуске терминала, тоже так себе решение.

В операционной системе `Linux` есть специальный файл `~/.bashrc`, где '~' - это путь к домашней папке пользователя.
`~/.bashrc` является `bash`-скриптом на выполняется каждый раз при запуске терминала.

```bash
code ~/.bashrc  # открыть файл ~/.bashrc в редакторе VSCode
```

Добавьте указанную строку в конец файла.

```bash
# добавить в запускаемые пути ./node_modules/.bin если его там нет
[[ ${PATH} =~ ./node_modules/.bin ]] || export PATH="./node_modules/.bin:${PATH}"
```

Сохраните файл и откройте новое окно терминала, затем перейдите в папку проекта и запустите компилятор.

```bash
# в новом окне терминала
cd projects/2023/jest-typescript-course/  # переходим в папку проекта
tsc --version  # смотрим версию компилятора
which tsc  # смотрим куда установлен компилятор
```

![tsc-version-3](docs/images/tsc-version-3.png)

Замечательно, теперь в разрабатываемых `npm` пакетах компилятор `typescript` будет браться из `node_modules`.

Ну, вот. Хотел совсем чуть чуть рассказать про установку `typescript`, а получилась целая глава.
В которой и про `npm`, и про глобальный контекст, про пути в `$PATH`, про `.gitignore`, и про то как меняется `package.json`. На этом предлагаю читателю сделать паузу и повторить все шаги, но уже на своем супер проекте,
проекте мечты, который призван перевернуть мир. Или же очередном 'Hello World', если читатель решил пока оставить
мир в покое, что тоже хорошо, так как команды из этой главы необходимо довести до автоматизма.

Вопросы к главе:

- Что будет если одновременно глобально установить `tsc` и добавить `./node_modules/.bin` в `$PATH`?
  a. `tsc` не будет работать.
  b. будет запускаться `tsc` установленный глобально.
  c. будет запускаться `tsc` установленный в `node_modules` т.к. этот путь идет первым в `$PATH`.
- Что происходит с `package.json` при установке `npm`-пакетов глобально?
  a. создается секция globalDependencies.
  b. файл не изменяется, т.к. изменения касаются операционной системы, а не разрабатываемого пакета.

## tsconfig


Компилятор `typescript` штука сложная и требует настроек, 
которые он будет брать из специального конфигурационного файла `tsconfig.json`.

Подобно многим другим хорошим программам, `tsc` оснащен опцией создания конфигурационного файла по 
умолчанию.

```bash
tsc --init
git status
```

![git-status-6](docs/images/git-status-6.png)

Появился новый `untracked file` - `tsconfig.json`.
Зафиксируем наши достижения в систему контроля версий и двинемся дальше.

```bash
git add .  # добавляем все файлы в будущий commit
git commit -m 'tsc --init'  # делаем commit
code tsconfig.json  # открываем tsconfig.json в редакторе VSCode
```

Оставим пока `tsconfig.json`, как есть и попробуем скомпилировать наш проект.

```bash
tsc  # запускаем компилятор
git status  # смотрим, что поменялось
```

Появился новый файл `src/index.js`.

![tsc](docs/images/tsc.png)

Его можно запустить.

```bash
node src/index.js
```

![node-src-index-js.png](docs/images/node-src-index-js.png)

Сам файл `src/index.js` будет содержать `javascript` код содержимое которого зависит от настроек в `tsconfig.json`.

```js
"use strict";
const helloWorld = {
    from: 'typescript',
    to: 'World',
};
console.log(`Hello ${helloWorld.to} from ${helloWorld.from}`);
```

Немного поэкспериментируем и изменим `tsconfig.json`.

```json
"target": "ES5",
```

Запустим компилятор.

```bash
tsc  # запускаем компилятор typescript -> javascript
code src/index.js  # отрываем созданный компилятором файл в VSCode
```

```js
"use strict";
var helloWorld = {
    from: 'typescript',
    to: 'World',
};
console.log("Hello ".concat(helloWorld.to, " from ").concat(helloWorld.from));
```

Код изменился, теперь он полностью поддерживает es5 синтаксис, один из самых ранних стандартов `javascript`.

Цель нашей книги разобраться с написанием и запуском unit-тестов, 
поэтому поддержка архаичных браузеров и скомпилированный код нас не интересует.
Мы просто от него абстрагируемся и будем у себя в голове представлять,
что запускается и работает непосредственно сам `typescript`. 
Благо среда VSCode обладает всеми необходимыми средствами, чтобы эту иллюзию поддерживать.

Прежде чем пойти дальше предлагаю осмотреться.

```bash
git status
```

![git-status-7](docs/images/git-status-7.png)

Изменения затронули файлы `tsconfig.json`, надо которым мы ставили эксперименты.
Эти изменения нам не нужны и хотелось бы откатить файл к предыдущему состоянию.

Также появился результат компиляции `src/index.js`. 
Файлы которые появляются в результате компиляции должны распространяться отдельно,
в виде релизов, значит надо указать `git`-у исключить их из репозитория с исходным кодом.
С другой стороны располагать скомпилированные файлы рядом с исходниками очень не удобно,
это затрудняет навигацию по проекту. 
Да и вообще, как я упомянул выше, результат компиляции нас не интересует. 
Так же как разработчиков `C++` не интересуют нолики и единички в получаемых ими двоичных файлах.

Хорошей практикой считается создание отдельной папки для скомпилированных файлов.
Но сначала уберем ненужные изменения, и поможет нам в этом `git`.

```bash
git reset --hard  # откатываемся на последний commit
git status  # смотрим, что получилось
```

![git-status-8](docs/images/git-status-8.png)

Остался болтаться `src/index.js`, его придется удалить отдельно.

```bash
rm src/index.js
```

Результаты компиляции вперемешку с исходным кодом вызывают проблемы уже сейчас.
Настала пора это исправить, открываем `tsconfig.json`.

```json
"outDir": "./dist",
```

Запускаем `tsc` и смотрим, что получилось.

```bash
tsc  # запускаем компилятор
git status  # смотрим, что поменялось
```

![git-status-9](docs/images/git-status-9.png)

Появилась папка `dist`, `git status` когда находит новые папки, не раскрывает их содержимое.
Сделаем еще один смелый эксперимент, добавим все файлы в область будущего commit-а.
Однако сам commit делать не будем.

```bash
git add .  # добавить все файлы будущий commit
git status  # смотрим состояние git
```

![git-status-10](docs/images/git-status-10.png)

Система контроля версий собирается добавить `dist/index.js`, так не пойдет.

```bash
git reset  # очищаем область будущего commit-а
git status  # смотрим состояние git
```

![git-status-11](docs/images/git-status-11.png)

Команда `git reset` отменяет все сделанные ранее `git add` и очищает область будущего commit-а.

Пришло время внести изменения в `.gitignore`

```bash
# .gitignore

# скомпилированные файлы
dist/

# чужой код
node_modules/

# файлы создаваемые автоматически
package-lock.json
```

Посмотрим, как это повлияет на поведение `git`.

```bash
git status  # смотрим состояние git
```

![git-status-12](docs/images/git-status-12.png)

`.gitignore` мы поменяли и система контроля версий ожидаемо информирует нас соответствующей красной строчкой.
