# CardAbout

Карточка с цветным заголовком и текстом в котором есть ссылка. Редкая карточка, есть только на странице "О проекте".

### Пропсы:

- **title** - string, заголовок карточки на цветной плашке
- **text** - string, текст карточки на белом фоне
- **color** - string, цвет плашки-заголовка
- **linkText** - string, текст ссылки в карточке
- **href** - string, URL путь в ссылке

---

# CardAnimatedPlug

Карточка с анимированной заглушкой.
### Пропсы:

- **text** - string, не обязателен, по умолчанию пустота. Заголовок карточки на цветной плашке
- **sectionClass** - string, не обязателен. Класс-миксин секции

---

# CardAnnotation

Компонент используется в связке с другими компонентами, представляет собой белую карточку с внутренним контейнером с вертикальной прокруткой для 1 параграфа и опционально подзаголовка в левом верхнем углу.

### Пропсы:

- **info** - string, не обязателен, если не передавать, параграф подвинется в начало карточки. По умолчанию false для верного срабатывания логики вставки элемента
- **description** - string, текст параграфа, по длине не ограничен
- **isMain** - boolean, влияет на то, будет ли карточка отображаться как главная (больший отступ в контейнере и верхние падинги). По умолчанию false
- **sectionClass** - string, не обязателен. Класс-миксин секции

---

# CardAnnotationContainer

Компонент используется в связке с другими компонентами, элементы передаются через пропс chilren. Представляет собой контейнер с вертикальным скроллом. Использует некоторые стили CardAnnotation.

### Пропсы:

- **caption** - string, не обязателен, если не передавать, параграф подвинется в начало карточки. По умолчанию false для верного срабатывания логики вставки элемента
- **children** - node, разметка для помещения в контейнер

---

# CardArticle

Компонент используется на странице "/articles" и "/read-and-watch". Исползуется в связке с CardAnnotation. Представляет собой блок с названием статьи / кратким описанием / именем и фамилией автора / должностью (опционально). При клике на кнопку "Читать на сайте" пользователь переходит на внешний ресурс.

### Пропсы:

1. **data**:

- **title** - string, название статьи
- **info** - string, имя и фамилия автора / должность
- **annotation** - string, краткое описание статьи
- **image** - string, ссылка на картинку главной карточки
- **articleUrl** - string, ссылка на внешний ресурс

2. **color** - string, цвет шапки статьи. По умолчанию 'white'
3. **isMain** - boolean, влияет на то, будет ли карточка отображаться как главная. По умолчанию false
4. **sectionClass** - string, класс-миксин для секций

---

# CardArticleBig

Компонент используется на главной странице в разных цветовых вариациях.

### Пропсы:

- **color** - string, цвет стиля background-color
- **title** - string, заголовок карточки
- **articleUrl** - string, по умолчанию - "#". Ссылка на статью

---

# CardBook

Компонент используется на странице "/books" и "/read-and-watch". Исползуется в связке с CardAnnotation. Представляет собой блок, который содержит: обложку книги (научные — красного цвета, художественные — фиолетового цвета) / название / автора / год / краткое описание.

### Пропсы:

1. **data**:

- **title** - string, название книги
- **author** - string, имя и фамилия автора
- **year** - string, год выпуска книги
- **type** - object/string, объект с вложенным цветом обложки книги, в зависимости от типа научные/художественные
- **annotation** - string, краткое описание книги

2. **sectionClass** - string, класс-миксин для секций

---

# CardCalendar

Компонент используется на странице Calendar, на главной странице и в попапах.

### Пропсы:

1. **cardData**:

- **id** - number, id карточки мероприятия
- **tags** - object, с полем 'name', тег в левом верхнем углу
- **startAt** - string, дата начала мероприятия
- **endAt** - string, дата конца мероприятия
- **title** - string, название мероприятия
- **address** - string, адрес мероприятия
- **contact** - string, имя организатора
- **remainSeats** - number, оставшиеся места
- **booked** - boolean, флаг записан ли ментор на мероприятие или нет. По умолчанию false. При true карточка меняет цвет, кнопка становится выделенной и меняет текст, remainSeats скрываются
- **phoneNumber** - string, телефон организатора
- **canceled** - boolean, отменено ли мероприятие. При true карточка становится розовой, блеклой, убирается кнопка записи

2. **onEventSignUpClick** - funtion, открытие попапа с подтверждением записи на мероприятие. По умолчанию стрелочная функция
3. **onEventDescriptionClick** - funtion, открытие попапа с подробным описанием мероприятия. По умолчанию стрелочная функция
4. **sectionClass** - string, класс-миксин для секций
5. **isWaitingResponse** - boolean, флаг того, что выполняется запрос к серверу, текст кнопки сабмита меняется, а сама она становится неактивной
6. **loadingEventId** - number, id карточки, с которой выполняется запрос к серверу. Нужна, чтобы своё состояние меняла только конкретная карточка
7. **isDescription** - boolean, при true открывает блок описания к карточке, по умолчанию false

---

# CardCatalog

Компонент используется на странице "/catalog" и "/read-and-watch". Используется в связке с CardFigure. Представляет собой блок, который содержит: превью и название статьи.

### Пропсы:

1. **data**:

- **id** - number, идентификатор/уникальное-значение карточки статьи
- **title** - string, название статьи
- **image** - string, превью статьи

2. **shape** - string, форма превью статьи. По умолчанию 'square'
3. **sectionClass** - string, класс-миксин для секций

---

# CardFigure

Компонент используется на страницах "О нас", "Права детей", "Справочник"

### Пропсы:

- **title** - string, заголовок карточки
- **shape** - string, тип фигуры - circle, square или arch
- **color** - string, цвет фигуры - yellow, green, pink, blue
- **children** - node, опционально. Дети встают под заголовок и выравниваются по центру
- **sectionClass** - string, класс-миксин для секций

---

# CardFilm

Универсальный компонент используется на "Главной", "Фильмы", "Видео", "Читать и смотреть". Представляет собой блок, который содержит: превью, длительность/тэги в зависимости от места использования компонента, название, краткое описание, кнопка/iframe в зависимости от разрешения экрана.

### Пропсы:

1. **data**:

- **id** - number, id фильма
- **image** - string, ссылка на картинку для превью фильма
- **title** - string, название фильма
- **info** - string, сноска с именем режиссёра, страной и годом выхода
- **link** - string, ссылка на фильм
- **tags** - array-of-objects, теги фильма (рубрики)
- **duration** - number, длительность видео в секундах, форматируется вспомогательной функцией и подставляется в span

2. **isVideo** - boolean, отвечает за отрисовку текста ссылки в зависимости от фильм/видео. По умолчанию false
3. **sectionClass** - string, класс-миксин для секций
4. **isMobile** - boolean, при true в контейнер с превью подставляется iframe, чтобы можно было просмотреть видео сразу в карточке. Также перестаёт открываться попап 

---

# CardPlace

Универсальный компонент карточек, используется на страницах "Главная", "Куда пойти". Исползуется в связке с CardAnnotation.

### Пропсы:

1. **data**:

- **image** - string, ссылка на картинку на превью места. Используется для для больших карточек.
- **title** - string, название места
- **description** - string, описание места
- **link** - string, ссылка на внешний ресурс
- **chosen** - boolean, отвечает за то, что место порекомендовал наставник. При true автоматически применяется рубрикатор "Выбор наставника". Также с этим флагом у карточек появляется изображение. По умолчанию false
- **address** - string, адрес места
- **gender** - string, гендерная категория ребенка. По умолчанию 'male'
- **age** - number, возрастная категория ребенка. По умолчанию 18
- **activityType** - number, индекс типа отдыха с бекенда. По умолчанию 1

2. **activityTypesSimplified** - object, типы отдыха в упрощённой форме
3. **color** - string, цвет шапки места.  По умолчанию 'white'
4. **sectionClass** - string, класс-миксин для секций
5. **isBig** - boolean, переключатель для отображения большой карточки с подстановкой необходимых стилей. По умолчанию false
6. **isMainPage** - boolean, переключатель для отображения карточки для "Главной страницы". По умолчанию false

---

# CardQuestion

Компонент используется на главной странице и на странице "Ответы на вопросы"

### Пропсы:

1. **data**:

- **title** - string, заголовок вопроса
- **tags** - array-of-objects, теги для лейблов-рубрик
- **answer** - string, ответ на вопрос

2. **sectionClass** - string, класс-миксин для секций
3. **isQuestionsPage** - boolean, отображать кнопку отображения ответа на вопрос или нет. По умолчанию false
4. **href** - string || object, ссылка, в которую обёрнут заголовок вопроса на главной
5. **isOpenByDefault** - boolean, открыт ли вопрос при монтировании, по умолчанию false

---

# CardRights

Компонент используется на странице "/rights". Используется в связке с CardFigure. Представляет собой блок, который содержит: название статьи и тэги/рубрикаторы.

### Пропсы:

- **title** - string, заголовок статьи
- **shape** - string, форма превью статьи, обязателен
- **tags** - array, список тэгов/рубрикаторов статьи
- **color** - string, цвет фона статьи
- **sectionClass** - string, класс-миксин для секций
- **id** - number, идентификатор/уникальное-значение статьи, обязателен
- **getActiveTags** - function, функция, которая собирает активные теги в строку для передачи на статичную страницу

---

# CardStub

Компонент используется на главной странице. Это визитка организации.

### Пропсы:

- **sectionClass** - string, класс-миксин для секций

---

# CardVideoMain

Компонент используется на главной странице и на странице "Видео". Представляет собой блок, который содержит: превью, длительность/тэги в зависимости от места использования компонента, название, краткое описание, кнопка/ссылка на просмотр в зависимости от разрешения экрана.

### Пропсы:

1. **data**:

- **id** - number, id видео
- **image** - string, ссылка на картинку для превью фильма
- **title** - string, название фильма
- **info** - string, сноска
- **link** - string, ссылка на фильм
- **duration** - number, длительность видео в секундах

2. **isMobile** - boolean, при true в контейнер с превью подставляется iframe, чтобы можно было просмотреть видео сразу в карточке. Также перестаёт открываться попап

---

# ProfileEventCard

Компонент используется на странице Account (Личный кабинет).

### Пропсы:

- **data** - object, данные мероприятия, подгружаются в попап
- **onOpen** - function, функция-коллбэк открытия карточки
- **sectionClass** - string, класс-миксин для секций

---
