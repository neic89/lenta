Этот проект - тестовое задание от магазина "Лента"

## Шаги запуска проекта ## 
npm i; // установка зависимостей

npm start; // проект запустится в браузере

npm test; // запуск тестов

## Общая информация ##
При любых изменениях в сторе, они (изменения) сохраняется в LocalStorage;

Если изменений нет, то генерируется 100 товаров - для проверки пагинации.

Переход по страницам сохраняется в query в url страницы, при перезугрке страницы Вы окажитесь на странице которая указана в URL.

Если query не валидный, то показывается первая страница.

Если в query указана старница превышающая допустимые страницы, то будет отображена ошибка.

Код товара - можно вводить любой. Формат который указан для пример, просто для примера и ни как не валидируется.

## Доделки ##
Можно было бы углубится в более глубокую валидацию полей ввода.

На данный момент валидация представлена базовыми браузерскими возможностями html5

## Тесты ##
Тесты написаны на компоненту Button и на редьюсер.

Не стал делать тестирование actions, т.к. нужно мокать localStorage;

Поддержать localStorage для jest не проблема, есть готовые npm модули, но мне показалось это излишним в рамках тестового задания.
