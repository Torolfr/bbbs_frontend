# AnimatedPageContainer

Анимированный компонент-заглушка. Используется на странице 404 (PageNotFound) и на других.

### Пропсы:

- **is404** - boolean, флаг того, что компонент используется на странице 404, при этом становится активным заголовок h1
- **titleText** - string, текст подзаголовка h2
- **buttonText** - string, текст кнопки
- **staticPage** - boolean, флаг того, что компонент на статической странице, нужен для определения пути ссылки
- **urlBack** - string, путь ссылки
- **isNoButton** - boolean, флаг того, что кнопка с обратным url не нужна, используется на главной странице
