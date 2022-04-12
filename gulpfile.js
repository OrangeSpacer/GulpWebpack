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

// Выполеннеи сценария по умолчанию
gulp.task('default', copy);