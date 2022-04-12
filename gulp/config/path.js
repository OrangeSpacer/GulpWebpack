//Для получения имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const scrFolder = `./src`;

export const path = {
    build: {
        js : `${buildFolder}/js/`,
        css : `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        files: `${buildFolder}/files/`
    },
    src: {
        js : `${scrFolder}/js/main.js`,
        scss: `${scrFolder}/scss/style.scss`,
        html: `${scrFolder}/*.html`,
        files: `${scrFolder}/files/**/*.*`,
    },
    watch: {
        js : `${scrFolder}/js/**/*.js`,
        scss: `${scrFolder}/scss/**/*.scss`,
        html: `${scrFolder}/**/*.html`,
        files: `${scrFolder}/files/**/*.*`,
    },
    clean: buildFolder,
    buildFolder: scrFolder,
    rootFolder: rootFolder,
    ftp: ``
}