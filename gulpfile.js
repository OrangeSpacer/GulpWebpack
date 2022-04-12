//Основной модуль
import gulp from "gulp";
//Импорт модулей
import {path} from "./gulp/config/path.js";

// Передаем значения в глобальную переменную
global.app = {
    path:path,
    gulp:gulp
}

// Имопрт задач
import { copy } from "./gulp/tasks/copy.js";
import { html } from "./gulp/tasks/html.js";
import {reset} from "./gulp/tasks/reset.js"

// Функция для наблюдения
function watch(){
    gulp.watch(path.watch.files, copy)
    gulp.watch(path.watch.html, html)
}

const mainTasks = gulp.parallel(copy, html)

const dev = gulp.series(reset, mainTasks, watch);

// Выполеннеи сценария по умолчанию
gulp.task('default', dev);