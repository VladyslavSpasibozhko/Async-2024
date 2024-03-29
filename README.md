# Asynchronous Programming 2024

💡 Как проходить курс:  
🔹 Материалы готовятся и будут появляться в этом оглавлении (на него можно подписаться) и в телеграме.  
🔹 Можно последовательно двигаться по оглавлению, смотреть видео, читать примеры кода, выполнять задания.  
🔹 Потом приходить на созвоны, задавать вопросы, приносить код на ревью, участвовать в обсуждении и лайвкодинге. Записи созвонов будут появляться под оглавлением.  
🔹 На созвоны можно приносить свои проекты для ревью, а рабочие проекты нужно очищать от доменной специфики и приносить выделенный кусок кода или очищенную структуру, не содержащие коммерческой тайны.  
🔹 Видео-версия рекомендаций: https://youtu.be/AYDPIu_LmLY  

![PXL_20231227_190319918 MP](https://github.com/metatech-university/Async-2024/assets/4405297/2d0855a7-18d5-45c2-8fa9-d1e873ba1030)

👉 Вопросы на интервью: (готовятся)  
👉 Самостоятельное оценивание знаний перед и после курса: (готовится)  
👉 Курс Node.js: https://github.com/HowProgrammingWorks/Index/blob/master/Courses/NodeJS-2024.md

## Содержание

Для того, чтобы писать прикладной код хватит первого столбика таблицы (а в оглавлении темы помечены 💯). Второй столбик полезен, как дополнительные знания, (углубленное изучение помечено как 🧑‍🎓). Для бекенда на ноде нужно освоить два первых столбика. Третий столбик содержит системные вещи (помечены ⚙️ в оглавлении), которые нужны для разработки инструментов, платформ и библиотек. Четвертый столбик (помечен 🧑‍🚀) это дополнительные абстракции, которые можно осваивать выборочно, они понадобятся не всем, но если вы работаете в проектах, где много функционального и/или реактивного программирования. Пятый столбик - вещи, которые морально устарели и могут рассматриваться как интересный антиквариат (помечены ⚠️).

| Applied 💯     | Advanced 🧑‍🎓                | System ⚙️           | Elective 🧑‍🚀           | Legacy ⚠️          |
|:--------------|:--------------------------|:-------------------|:---------------------|:------------------|
| `callbacks`   | `AsyncQueue`              | `Thenable`         | `compose callbacks`  | `Deferred`        |
| `promises`    | `AsyncPool`               | `Semaphore`        | `async compose`      | `function*/yield` |
| `async/await` | `AsyncCollector`          | `Mutex`            | `Observer`           | `Async.js`        |
| `events`      | `Chain of responsibility` | `Spin Lock`        | `RxJS`               | `Metasync`        |
| `streams`     | `Async Generator`         | `MessageChannel`   | `Future`             | `middleware`      |
| `signals`     | `Async Iterator`          | `BroadcastChannel` | `coroutines`         |                   |
| `locks`       |                           | `threads`          | `Actor Model`        |                   |
|               |                           | `processes`        | `do`                 |                   |

Приоритеты подготовки материалов по курсу у меня тоже по этой таблицы, я буду двигаться от первого столбика к пятому. Но часть материалов я уже добавил, они были записаны ранее, находятся в открытом доступе, но все еще актуальны и переписывать их нет смысла.

Условные обозначения: ⭐ новые лекции, ✨ открытые старые лекции, 💯 обязательные, 🧑‍🎓 продвинутые, ⚙️ системные, 🧑‍🚀 по выбору, ⚠️ устаревшее, 🧩 необязательные темы, 💻 примеры кода, 🧑‍💻 задания

- 💯 Контракты асинхронности на базе callback
  - ⭐ [Контракты `Callback` и `Callback-last-error-first`](https://youtu.be/vcOGCWL-eZc)
  - 💻 Колбеки: https://github.com/HowProgrammingWorks/Callbacks
  - 💻 Примеры кода с колбеками: https://github.com/HowProgrammingWorks/AsynchronousProgramming
  - 🧑‍💻 [Задания по колбекам](https://github.com/metatech-university/Async-2024/tree/main/Tasks/Callbacks)
- 💯 Минимально необходимое понимание рантайма: event loop, I/O, таймеры
  - ⭐ [Фазы Event-loop в V8 и Node.js](https://youtu.be/ofU4In1RPHk)
  - 🧩 [Стрим с разбрром Event loop и асинхронности](https://www.youtube.com/live/ND5HNHicACI)
  - 💻 Таймеры: https://github.com/HowProgrammingWorks/Timers
  - 🧑‍💻 Задания по таймерам (готовится)
- 💯 Контракты на базе событий
  - ⭐ [События: `EventTarget`, `EventEmitter`](https://youtu.be/dwLyUGQGTKU)
  - 💻 [Примеры кода из новой лекции по событиям](https://github.com/HowProgrammingWorks/Events)
  - 🧑‍💻 [Задания по событиям](https://github.com/metatech-university/Async-2024/tree/main/Tasks/Events)
  - ✨ [EventEmitter из старой лекции](https://youtu.be/LK2jveAnRNg)
  - 💻 [Примеры кода из старой лекции по EventEmitter](https://github.com/HowProgrammingWorks/EventEmitter)
- 💯 Абстракция потоков `Stream`
  - ⭐ [Стримы Readable, Writable, Transform, открытый конструктор, буферизация, backpressure](https://youtu.be/Qr2b8C_p_Pc)
  - 🧑‍💻 Задания по стримам (готовится)
  - 💻 Примеры кода: https://github.com/HowProgrammingWorks/Streams/tree/master/JavaScript
  - ✨ [Паттерн открытый конструктор (Revealing Constructor)](https://youtu.be/leR5sXRkuJI)
  - 💻 Примеры кода: https://github.com/HowProgrammingWorks/RevealingConstructor
- ⚙️ Контракт `Thenable`
  - ⭐ [Контракт `Thenabe`](https://youtu.be/CHQcDllD_io)
  - ✨ [Thenable из старой лекции](https://youtu.be/Jdf_tZuJbHI)
  - 💻 Примеры кода: https://github.com/HowProgrammingWorks/Thenable
  - 🧑‍💻 [Задания по `Thenabe`](https://github.com/metatech-university/Async-2024/tree/main/Tasks/Thenable)
- 💯 Контракт `Promise`
  - ⭐ [Promise: then/catch/finally и методы класса all, allSettled, race, any](https://youtu.be/2tTr9_g2w9M)
  - ✨ [Асинхронность на промисах из старой лекции](https://youtu.be/RMl4r6s1Y8M)
  - 💻 [Примеры кода](https://github.com/HowProgrammingWorks/Promise/tree/master/JavaScript)
  - 🧑‍💻 [Задания по `Promise`](https://github.com/metatech-university/Async-2024/tree/main/Tasks/Promises)
- 💯 Контракт асинхронных функций `async/await`
  - ⭐ [Асинхронные функции](https://youtu.be/GXjYDDjnFSQ)
  - ✨ [Асинхронные функции из старой лекции](https://youtu.be/Jdf_tZuJbHI)
  - 💻 [Примеры кода](https://github.com/HowProgrammingWorks/AsyncFunction/tree/main/JavaScript)
  - 🧑‍💻 [Задания по `async/await`](https://github.com/metatech-university/Async-2024/tree/main/Tasks/AsyncAwait)
- 💯 Контракт сигналов `Signals`
  - ⭐ [Сигналы: signal, computed, effect](https://youtu.be/o36cKrQgXW0)
  - 💻 [Примеры кода](https://github.com/HowProgrammingWorks/Signals)
  - 🧑‍💻 Задания по сигналам (готовится)
- 💯 Обработка ошибок, их выявление и решение проблем со стектрейсом
  - ✨ [Обработка ошибок из старой лекции](https://youtu.be/Jdf_tZuJbHI)
  - 💻 Примеры кода (готовится)
  - 💻 Примеры кода из старого курса: https://github.com/HowProgrammingWorks/AsyncAwait
  - 💻 Примеры кода: (готовятся), будут тут https://github.com/HowProgrammingWorks/AsyncErrorHandling
  - 🧑‍💻 Задания по обработке ошибок (готовится)
- 🧑‍🎓 Асинхронная очередь `AsyncQueue`
  - ⭐ Асинхронная очередь (готовится)
  - ✨ [Конкурентная асинхронная очередь из старой лекции](https://youtu.be/Lg46AH8wFvg)
  - 💻 Примеры кода: https://github.com/HowProgrammingWorks/ConcurrentQueue
  - 💻 Примеры кода: (готовятся), будут тут https://github.com/HowProgrammingWorks/AsyncQueue
- 🧑‍🎓 Асинхронный пул `AsyncPool`
  - ✨ [Асинхронный пул для worker thread pool в Node.js](https://youtu.be/Jj5KZRq4wYI)
  - 💻 Примеры кода: https://github.com/HowProgrammingWorks/Pool
  - 💻 Примеры кода: (готовятся), будут тут https://github.com/HowProgrammingWorks/AsyncPool
- 🧑‍🎓 Асинхронная коллекция `Collector`
  - 🧩 Асинхронные коллекции (собираем значения до готовности)
  - ✨ [Асинхронные коллекторы данных](https://youtu.be/tgodt1JL6II)
  - 💻 Примеры кода: https://github.com/HowProgrammingWorks/Collector
- 🧑‍🎓 Паттерн цепочка ответственности `Chain of responsibility`
  - 💻 Примеры кода: (готовятся), будут тут https://github.com/HowProgrammingWorks/ChainOfResponsibility
- 🧑‍🎓 Конвертеры контрактов `asyncify`, `callbackify`, стыковка кода в разных стилях
  - ⭐ Асинхронные адаптеры (готовится)
  - ✨ [Асинхронные адаптеры из старой лекции](https://youtu.be/76k6_YkYRmU)
  - 💻 Примеры кода: https://github.com/HowProgrammingWorks/AsyncAdapter
  - 🧑‍💻 Задания по адаптерам (готовится)
- 🧑‍🎓 Предотвращение состояния гонки по данным и управлению в асинхронном коде
- 🧑‍🎓 Отмена асинхронных операций: `AbortController`, `AbortSignal`
  - 🧩 Документация на MDN: https://developer.mozilla.org/en-US/docs/Web/API/AbortController
- 🧑‍🎓 `Async Generator` и `Async Iterator`
  - ✨ [Генераторы и асинхронные генераторы из старой лекции](https://youtu.be/kvNm9D32s8s)
- ⚙️ Абстракции портированные из параллельного программирования в асинхронное
  - 🧩 Асинхронные абстракции: `Semaphore`, `Mutex`
  - 🧩 Блокировки `Lock`, `Spin Lock`
- ⚙️ Абстракции параллельного программирования
  - 🧩 Системные абстракции: `threads`, `processes`
  - 🧩 Межпроцессовое и межпотоковое взаимодействие, `MessageChannel`, `BroadcastChannel`
  - 🧩 Корутины `coroutines`
- 🧑‍🎓 Асинхронные генераторы и асинхронные итераторы
  - ✨ [Генераторы и асинхронные генераторы из старой лекции](https://youtu.be/kvNm9D32s8s)
  - 💻 Генераторы: https://github.com/HowProgrammingWorks/Generator
  - 💻 Асинхронные генераторы: https://github.com/HowProgrammingWorks/AsyncGenerator
  - ✨ [Итераторы и асинхронные итераторы из старой лекции](https://youtu.be/rBGFlWpVpGs)
  - 💻 Итераторы: https://github.com/HowProgrammingWorks/Iterator
  - 💻 Асинхронные итераторы: https://github.com/HowProgrammingWorks/AsyncIterator
- 🧑‍🚀 Композиция функций на колбеках `compose callbacks`
  - ✨ [Асинхронная композиция функций](https://youtu.be/3ZCrMlMpOrM)
  - 💻 Примеры кода: https://github.com/HowProgrammingWorks/AsyncCompose
- 🧑‍🚀 Композиция асинхронных функций `async compose`
  - 💻 Примеры кода: https://github.com/HowProgrammingWorks/AsyncCompose
- 🧑‍🚀 Асинхронность на потоках событий `RxJS`
  - ✨ Потоки событий, паттерн `Observer/Observable`
  - ✨ [Асинхронность на RxJS из старой лекции](https://youtu.be/0kcpMAl-wfE)
  - 💻 Примеры кода: https://github.com/HowProgrammingWorks/Rx
- 🧑‍🚀 Модель акторов `actor model`
  - ✨ [Модель акторов](https://youtu.be/xp5MVKEqxY4)
  - 💻 Примеры кода: https://github.com/HowProgrammingWorks/ActorModel
- 🧑‍🚀 Библиотека `do`: https://www.npmjs.com/package/do
- 🧑‍🚀 Функциональное асинхронное программирование, контракт `Future`
  - ✨ [Асинхронность на фьючерах без состояния](https://youtu.be/22ONv3AGXdk)
  - 💻 Примеры кода: https://github.com/HowProgrammingWorks/Future
- ⚠️ Асинхронность на синхронных генераторах `function*/yield`
- ⚠️ Мидлвары `middleware` как антипаттерн: https://youtu.be/RS8x73z4csI
  - 💻 Примеры кода: (готовятся), будут тут https://github.com/HowProgrammingWorks/Middleware
- ⚠️ Контракты семейства `Deferred`
  - ✨ [Deferred: Асинхронность на диферах с состоянием](https://youtu.be/a2fVA1o-ovM)
  - 💻 Примеры кода: https://github.com/HowProgrammingWorks/Deferred
- ⚠️ Async.js
  - 🧩 [Легаси код на библиотеке `Async.js`](https://youtu.be/XQ94wQc-erU)
  - 💻 Примеры кода: https://github.com/HowProgrammingWorks/AsynchronousProgramming
- ⚠️ Коллекция асинхронных абстракций `Metasync`: https://www.npmjs.com/package/metasync
  - ✨ [Архивная лекция](https://youtu.be/xNfOv9I1MDk)
- ⚙️ Трекинг асинхронных контекстов
  - ⭐ [AsyncLocalStorage, AsyncResource](https://youtu.be/zatWQkOXyVM)
  - 💻 Примеры использования AsyncLocalStorage и AsyncResource: https://github.com/HowProgrammingWorks/AsyncContextTracking
- ⚙️ Процессы и потоки
  - 🧩 [Многопоточность в Node.js](https://youtu.be/VNXga8zomrY)
  - 🧩 [Web Locks API in Node.js and browser](https://youtu.be/auMM-uV12F0)

## Записи созвонов

| Week | Q&A | Call |
| ---- | --- | ---- |
| 1    | [🎧 Q&A #1](https://youtu.be/wROwn8L7z2Q) | [🎧 Community call #135](https://youtu.be/8rmHst1_yVw) |
| 2    | [🎧 Q&A #2](https://youtu.be/k4z4Z9GzjHk) | [🎧 Community call #136](https://youtu.be/K2DURZcn8fQ) |
| 3    | [🎧 Q&A #3](https://youtu.be/C36hlPJ_bZE) | [🎧 Community call #137](https://youtu.be/Z5KVhiu-Wwo) |
| 4    | [🎧 Q&A #4](https://youtu.be/x6mw9zTWvoI) | [🎧 Community call #138](https://youtu.be/sUNLN0Ba-FM) |
| 5    | [🎧 Q&A #5](https://youtu.be/1hiPHn3CNko) | [🎧 Community call #139](https://youtu.be/1rX1rjiiFU8) |
| 6    | [🎧 Q&A #6](https://youtu.be/H8ZeA1v27F8) | [🎧 Community call #140](https://youtu.be/XJcyOtd_Jg8) |
| 7    | [🎧 Q&A #7](https://youtu.be/UVYFezLzpds) | [🎧 Community call #141](https://youtu.be/C5ccFiiMryA) |
| 8    | [🎧 Q&A #8](https://youtu.be/D2953mBIzPw) | [🎧 Community call #142](https://youtu.be/8Oay9T81Y-s) |
| 9    | [🎧 Q&A #9](https://youtu.be/6Gn7Qq9W6Kc) | [🎧 Community call #143](https://youtu.be/T8Z4KlMN6cM) |
| 10   | [🎧 Q&A #10](https://youtu.be/tNKCw0R_CRA) | [🎧 Community call #144](https://youtu.be/kEiuzraEJq8) |
| 11   | [🎧 Q&A #11](https://youtu.be/YNRTNcNwRKI) | |
| 12   | [🎧 Q&A #12](https://youtu.be/-H0dJdaJ7T0) | |

## Сравнение контрактов и абстракций

| Contract         | Control      | Events     | Data                     |
|:-----------------|:-------------|:-----------|:-------------------------|
| `callbacks`      | Control flow |            |                          |
| `Thenable`       | Control flow |            | Container                |
| `Promise`        | Control flow |            | Container                |
| `async/await`    | Control flow |            |                          |
| `events`         |              | Event flow |                          |
| `streams`        |              | Event flow | Data flow                |
| `RxJS`           |              | Event flow | Data flow                |
| `signals`        |              |            | Reactive value container |
| `locks`          | Control flow |            |                          |
| `AsyncIterable`  | Control flow |            |                          |
| `AsyncQueue`     |              |            | Collection               |
| `AsyncPool`      |              |            | Collection               |
| `AsyncCollector` |              |            | Collection               |
