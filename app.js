const { argv } = require('./config/yargs');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const colors = require('colors');

let argv2 = process.argv;

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(tabla => console.log(tabla))
            .catch(err => console.log(err))
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => {
                console.log('============================================='.green);
                console.log(`El archivo tabla-${argv.base} ha sido creado`.red);
                console.log('============================================='.rainbow);
            })
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}