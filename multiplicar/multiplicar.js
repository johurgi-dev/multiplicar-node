const { resolveTxt } = require('dns');
const fs = require('fs');

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('La base introducida, no es un número.');
            return;
        }
        if (!Number(limite)) {
            reject('El límite introducido, no es un número.');
            return;
        }
        let data = '';
        for (let index = 1; index <= limite; index++) {
            data += `${base} * ${index} = ${base * index}\n`;
        }
        resolve(data);
    });
};

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('La base introducida, no es un número');
            return;
        }
        if (!Number(limite)) {
            reject('El límite introducido, no es un número.');
            return;
        }
        let data = ''

        for (let index = 1; index <= limite; index++) {
            data += `${base} * ${index} = ${base * index}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base}.txt`);
            }
        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla
};