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
import {reset} from "./gulp/tasks/reset.js"

// Функция для наблюдения
function watch(){
    gulp.watch(path.watch.files, copy)
}

const dev = gulp.series(reset,copy, watch);

// Выполеннеи сценария по умолчанию
gulp.task('default', dev);