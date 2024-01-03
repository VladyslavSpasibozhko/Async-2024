# Asynchronous Programming 2024

![PXL_20231227_190319918 MP](https://github.com/metatech-university/Async-2024/assets/4405297/2d0855a7-18d5-45c2-8fa9-d1e873ba1030)

💡 Как проходить курс:  
🔹 Последовательно двигаться по оглавлению, смотреть видео, читать примеры кода, выполнять задания.  
🔹 Потом приходить на созвоны, задавать вопросы, приносить код на ревью, участвовать в обсуждении и лайвкодинге. Записи созвонов будут появляться под оглавлением.  
🔹 На созвоны можно приносить свои проекты для ревью, а рабочие проекты нужно очищать от доменной специфики и приносить выделенный кусок кода или очищенную структуру, не содержащие коммерческой тайны.  
🔹 Это оглавление будет расширяться в течении 2024 года, уведомления о появлении новых видео и заданий будут в телеграм группе, но можно подписаться и на изменения гитхаб-репозитория.  
🔹 Видео-версия рекомендаций: https://youtu.be/AYDPIu_LmLY  

👉 Вопросы на интервью: (готовятся)  
👉 Самостоятельное оценивание знаний перед и после курса: (готовится)  
👉 Курс Node.js: https://github.com/HowProgrammingWorks/Index/blob/master/Courses/NodeJS-2024.md

## Содержание

| Applied 💯     | Advanced 🧑‍🎓                | System ⚙️           | Elective 🧑‍🚀           | Legacy ⚠️          |
|:--------------|:--------------------------|:-------------------|:---------------------|:------------------|
| `callbacks`   | `EvemtEmitter`            | `Thenable`         | `compose callbacks`  | `Deferred`        |
| `promises`    | `AsyncQueue`              | `Semaphore`        | `async compose`      | `function*/yield` |
| `async/await` | `AsyncPool`               | `Mutex`            | `Observer`           | `Async.js`        |
| `events`      | `Collector`               | `Spin Lock`        | `RxJS`               | `Metasync`        |
| `streams`     | `Chain of responsibility` | `MessageChannel`   | `Future`             | `middleware`      |
| `signals`     | `Async Generator`         | `BroadcastChannel` | `coroutines`         | `do`              |
| `locks`       | `Async Iterator`          | `threads`          | `Actor Model`        |                   |
|               |                           | `processes`        |                      |                   |

Условные обозначения: ⭐ новые лекции, ✨ открытые лекции, 🧩 необязательные темы

- ⭐ Контракты асинхронности на базе callback: `Callback-last-error-first`
- ✨ Минимально необходимое понимание рантайма: event loop, I/O, таймеры
- ⭐ Контракты асинхронности на базе событий: `EventEmitter`, `Stream`
- ✨ Потоки событий, паттерн `Observer/Observable`, реактивность на `RxJS`, `signals`
- ⭐ Контракты `Promise/Thenable/then/catch/finally` и синтаксис `async/await`
- ⭐ Параллельное и последовательное исполнение `all/any/race/allSettled`
- ⭐ Конвертеры контрактов `asyncify`, `callbackify`, стыковка кода в разных стилях
- ⭐ Предотвращение состояния гонки по данным и управлению в асинхронном коде
- ⭐ Отмена асинхронных операций: `AbortController`, `AbortSignal`
- ⭐ Обработка ошибок, их выявление и возможные проблемы со стектрейсом
- 🧩 Асинхронныек коллекции (собираем значения до готовности)
- 🧩 Асинхронные абстракции: `Queue`, `Pool`, `Collector`, `Semaphore`, `Lock`, `Mutex`
- 🧩 Системные абстракции: `threads`, `processes`, `MessageChannel`, `BroadcastChannel`
- 🧩 Асинхронные генераторы и асинхронные итераторы
- 🧩 Обзор других абстракций: `future`, `do`, `coroutines`, `actor model`, `Chain of responsibility`
- 🧩 Обзор легаси контрактов и антипаттернов: `yield`, `middleware`, `deferred`, `Async.js`

## Записи созвонов

| Week | Q&A | Call |
| ---- | --- | ---- |
| 1    | [🎧 Q&A #1](https://youtu.be/wROwn8L7z2Q) | [🎧 Community call #135](https://youtu.be/8rmHst1_yVw) |
