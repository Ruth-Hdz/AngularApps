import { Component } from '@angular/core';

@Component({
  selector: 'app-lrhz-tareas-lrhz',
  templateUrl: './tareas-lrhz.component.html',
  styleUrls: ['./tareas-lrhz.component.css']
})
export class TareasLrhzComponent {
  listTareas: any[] = [];
  nuevaTareaNombre: string = '';

  constructor() { }

  agregarTarea(): void {
    if (this.nuevaTareaNombre.trim() !== '') {
      const nuevaTarea = { nombre: this.nuevaTareaNombre, estado: 'pendiente' };
      this.listTareas.push(nuevaTarea);
      this.nuevaTareaNombre = ''; 
    }
  }

  eliminarTarea(index: number): void {
    this.listTareas.splice(index, 1);
  }

  actualizarTarea(index: number, tarea: any): void {
    const nuevaEstado = tarea.estado === 'pendiente' ? 'completada' : 'pendiente';
    this.listTareas[index].estado = nuevaEstado;
  }
}
