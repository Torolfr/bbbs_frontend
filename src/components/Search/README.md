# Search

Компонент поиска на сайта, расположен в Header

### Пропсы:

- **isOpenSearch** - boolean, преднозначен для контроля состояния поиска открыт/закрыт, дефолт false
- **setIsOpenSearch** - function, преднозначен для переключения состояния поиска открыт/закрыт
- **isMobileMenuOpen** - boolean, преднозначен для контроля состояния бургер меню открыт/закрыт, дефолт false
- **setIsMobileMenuOpen** - function, преднозначен для переключения состояния бургер меню открыт/закрыт

### Текущее состояние поиска:

1. Поиск отправляет запрос через небольшой промежуток ввода символов (300мс), кроме пустых запросов или запросов из пробелов
2. На данный момент реализован переход на детальный просмотр на страницах 
(Видео, Права детей, Справочник, Календарь, Фильмы, Вопросы, Книги, Статьи, Куда пойти, Истории)
3. Высота поиска во весь экран, открывается поверх всего контента
4. Высота зоны выдачи результатов 75% от экрана
5. Поиск не выдает события Календаря если пользователь не авторизован
6. Поиск не выдает места Куда пойти если город не выбран
7. Простые анимации открытия и вывода результатов
