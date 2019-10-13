const opts = {
    base: {
        demand: true, //que se obligatorio poner --base en cmd
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10, //Si nadie pone un limite, va a ser 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Genera nueva tabla', opts)
    .help()
    .argv;

module.exports = {
    argv
}