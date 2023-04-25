import { existsSync, mkdirSync } from "fs";
import { resolve, sep } from "path";
import { v4 as uuid } from "uuid";

export const validateKey = (obj, key) => {
    const keys = Object.keys(obj);

    if (typeof key === "string") {
        if (keys.includes(key)) {
            return true;
        }
    }

    if (Array.isArray(key)) {
        if (key.every((value) => keys.includes(value))) {
            return true;
        }
    }

    return false;
};

export const storagePath = {
    image: resolve(`..${sep}`, `data${sep}image`),
    pdf: resolve(`..${sep}`, `data${sep}pdf`),
    audio: resolve(`..${sep}`, `data${sep}audio`),
    docs: resolve(`..${sep}`, `data${sep}docs`),
};

export function getFilePathName(type) {
    const id = `${uuid()}-${dateutils.getUTCTimestamp()}`;

    switch (type) {
        case "image": {
            if (!existsSync(storagePath.image)) {
                mkdirSync(storagePath.image, { recursive: true });
            }

            return { filename: resolve(storagePath.image, `${id}.jpeg`), fileId: id };
        }

        case "pdf": {
            if (!existsSync(storagePath.pdf)) {
                mkdirSync(storagePath.pdf, { recursive: true });
            }

            return { filename: resolve(storagePath.pdf, `${id}.pdf`), fileId: id };
        }

        case "audio": {
            if (!existsSync(storagePath.audio)) {
                mkdirSync(storagePath.audio, { recursive: true });
            }

            return { filename: resolve(storagePath.audio, `${id}.aac`), fileId: id };
        }

        default: {
            return null;
        }
    }
}

export function getFilePath({ type, id }) {
    switch (type) {
        case "image": {
            return `${storagePath.image}${sep}${id}.jpeg`;
        }

        case "pdf": {
            return `${storagePath.pdf}${sep}${id}.pdf`;
        }

        case "audio": {
            return `${storagePath.audio}${sep}${id}.aac`;
        }

        default:
            return null;
    }
}

// get utc date time stamp
export function getUTCTimestamp() {
    const date = new Date();
    const utcDate = date.toUTCString();
    const timeStamp = new Date(utcDate).getTime() / 1000; // miliseconds to seconds
    return Math.floor(timeStamp);
}

// get utc date time stamp
export function convertTimestampToUTCDate(timeStamp) {
    const date = new Date(timeStamp * 1000);
    return date.toUTCString();
}
