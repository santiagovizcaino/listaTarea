let tareasPorHacer = [];
const fs = require('fs');


const cargarDB = () => {
    try {
        tareasPorHacer = require('../db/data.json');
    } catch (error) {
        tareasPorHacer = []
    }

    //MIOOOOO return tareasPorHacer
}

const guardarDB = () => {
    let data = JSON.stringify(tareasPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error("no se pudo guaradar", err);
    });
}

const crear = (descripcion) => {
        cargarDB();
        let tarea = {
            descripcion,
            completado: false
        };
        tareasPorHacer.push(tarea);
        guardarDB();

        return tarea;
    }
    //MIOOOOOOOOOOOOOOOOO
    // const listar = () => {
    //     tarea = cargarDB();
    //     return tarea;
    // }

const getLista = () => {
    cargarDB();
    return tareasPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = tareasPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        tareasPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }
    return false;
}

//MIOOOOOOOOOOOOOO**********************
// const borrar = (descripcion) => {
//     cargarDB();
//     let index = tareasPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
//     if (index >= 0) {
//         tareasPorHacer.splice(index, 1);
//         guardarDB();
//         return true;
//     }
//     return false;
// }

const borrar = (descripcion) => {
    cargarDB();
    let nuevolistado = tareasPorHacer.filter(tarea => tarea.descripcion !== descripcion);
    if (tareasPorHacer.length === nuevolistado.length) {
        return false;
    } else {
        tareasPorHacer = nuevolistado;
        guardarDB();
        return true;
    }


}

module.exports = {
    crear,
    //listar
    getLista,
    actualizar,
    borrar
}