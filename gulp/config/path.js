//Для получения имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const scrFolder = `./src`;

export const path = {
    build: {
        files: `${buildFolder}/files/`
    },
    src: {
        files: `${scrFolder}/files/**/*.*`,
    },
    watch: {
        files: `${scrFolder}/files/**/*.*`,
    },
    clean: buildFolder,
    buildFolder: scrFolder,
    rootFolder: rootFolder,
    ftp: ``
}