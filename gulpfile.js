//Основной модуль
import gulp from "gulp";
//Импорт модулей
import {path} from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";
// Передаем значения в глобальную переменную
global.app = {
    path:path,
    gulp:gulp,
    plugins:plugins
}

// Имопрт задач
import { copy } from "./gulp/tasks/copy.js";
import { html } from "./gulp/tasks/html.js";
import {reset} from "./gulp/tasks/reset.js";
import { server } from "./gulp/tasks/server.js";

// Функция для наблюдения
function watch(){
    gulp.watch(path.watch.files, copy)
    gulp.watch(path.watch.html, html)
}

const mainTasks = gulp.parallel(copy, html)

const dev = gulp.series(reset, mainTasks, gulp.parallel(watch,server));

// Выполеннеи сценария по умолчанию
gulp.task('default', dev);