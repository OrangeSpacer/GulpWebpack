//Для получения имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const scrFolder = `./src`;

export const path = {
    build: {
        html: `${buildFolder}/`,
        files: `${buildFolder}/files/`
    },
    src: {
        html: `${scrFolder}/*.html`,
        files: `${scrFolder}/files/**/*.*`,
    },
    watch: {
        html: `${scrFolder}/**/*.html`,
        files: `${scrFolder}/files/**/*.*`,
    },
    clean: buildFolder,
    buildFolder: scrFolder,
    rootFolder: rootFolder,
    ftp: ``
}