const Tarea = require("./tarea");

class Tareas {
  _listado = {};

  get listadoArr() {
    const listado = [];

    Object.keys(this._listado).forEach((key) => {
      const tarea = this._listado[key];
      listado.push(tarea);
    });

    return listado;
  }

  constructor() {
    this._listado = {};
  }

  cargarTareasFromArray(tareas = []) {
    tareas.forEach((tarea) => {
      this._listado[tarea.id] = tarea;
    });
  }

  crearTarea(desc = "") {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }

  listarTareas() {
    console.log();
    this.listadoArr.forEach((tarea, index) => {
      console.log(
        `${index + 1}:`.green,
        tarea.desc,
        "|".blue,
        tarea.completadoEn ? "Completada".green : "Pendiente".red
      );
    });
  }

  listarCompletadas(completadas = true) {
    console.log();
    let contador = 0;
    this.listadoArr.forEach((tarea) => {
      if (completadas) {
        if (tarea.completadoEn) {
          console.log(
            `${(contador += 1)}: `.cyan,
            tarea.desc,
            "|".blue,
            tarea.completadoEn
          );
        }
      } else {
        if (!tarea.completadoEn) {
          console.log(
            `${(contador += 1)}: `.cyan,
            tarea.desc,
            "|".blue,
            "Pendiente".red
          );
        }
      }
    });
  }
}

module.exports = Tareas;
