const descripcion = {
    demand: true,
    alias: 'd',
    desc: "descripcion de la tarea por hacer"
};

const completado = {
    default: true,
    alias: 'c',
    desc: "marca como completado o pendiente la tarea"
}



// const argv = require('yargs')
//     .command('crear', 'crear una tarea', {
//         descripcion: {
//             demand: true,
//             alias: 'd',
//             desc: "descripcion de la tarea por hacer"
//         }


//     })
//     .command('actualizar', 'actualiza una tarea', {
//         descripcion: {
//             demand: true,
//             alias: 'd',
//             desc: "descripcion de la tarea por hacer"
//         }


//     })
//     .help()
//     .argv;


const argv = require('yargs')
    .command('crear', 'crear una tarea', {
        descripcion
    })
    .command('actualizar', 'actualiza una tarea', {
        descripcion,
        completado


    })
    .command('borrar', 'borra una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}