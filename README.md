# Backend

## Установка

Установить [Node.js](https://nodejs.org/ru)

Установить Nest.js

```bash
npm i -g @nestjs/cli
```

Перейти в папку проекта (backend). Установить зависимости.

```bash
npm i
```

Установить [PostgreSQL](https://www.postgresql.org/download/)

Установить [pgAdmin](https://www.pgadmin.org/)

Создать новую базу данных (например, с названием vtb). Для этого переходим в Servers(слева) -> Databases, нажимаем правой клавишей по Databases, далее нажимаем Create. Вводим название и создаём БД.

Перейти в файл .env и изменить переменную окружения:
`DATABASE_URL="postgresql://{user_name}:{password}@localhost:5432/{db_name}?schema=public"`

Ввести команду для создания таблиц на основе моделей:

```bash
npx prisma db push
```

Запустить создание фейковых данных:

```bash
npm run seed
```

Запустить проект:

```bash
npm start
```
=======
# hackathon
Для просмотра инструкции по установке backend, перейдите в папку backend.
>>>>>>> dadb51929c184cc70537e20d4817a549d74d7a65
