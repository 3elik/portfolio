# Учебная сборка Loftschool

> Сборка работает на gulp версии 4.0. 

#### Для начала работы

1. ```clone this repo```
2. ```cd path/to/...```
3. ```npm install gulpjs/gulp-cli -g```  
> Установка последней версии Gulp CLI tools глобально (подробнее - [GitHub](https://github.com/gulpjs/gulp/blob/4.0/docs/getting-started.md) )

4. ```npm install```
6. ```run gulp``` 

***

## Update
Автор: **Гербут Алексей** aka `3elik`

##### Добавлено
+ Таск `sprite:img` для объединения png- и gif-изображений в спрайт.

> Ищет файлы в папке `source/sprite`. Генерирует 2 файла: `sprite.png` и `sprite.scss`. **Sprite.png** сохраняет в папку `source/images`. В дальнейшем спрайт будет скопирован таском `copy:image`. **Sprite.scss** сохраняет в папку `source/style/common`. **Sprite.scss** подключен в файле `App.scss`.

> Можно вызвать отдельно коммандой:
```js
gulp sprite:img
```

+ Таск `copy:fonts` копирует все файлы со шрифтами из папки `source/fonts` в папку `build/assets/fonts`.

> Можно вызвать отдельно коммандой:
```js
gulp copy:fonts
```