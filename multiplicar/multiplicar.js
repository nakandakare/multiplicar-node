const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => { //valor por defecto

    console.log('==========='.green);
    console.log(`tabla de ${base}`.blue);
    console.log('==========='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}\n`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('No es un numero');
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            }
            resolve(`tabla-${base}.txt`);
        })
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}