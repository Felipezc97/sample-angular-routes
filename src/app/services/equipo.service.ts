import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  equipo: any[] = [
    {
      nombre:'Felipe',
      cargo: 'Desarrollador',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum qui nostrum quas eveniet molestiae distinctio rerum, est tenetur, repellendus ab natus! Explicabo minus voluptatem sequi excepturi inventore autem dolor'
    },
    {
      nombre:'Juan',
      cargo: 'Tester',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum qui nostrum quas eveniet molestiae distinctio rerum, est tenetur, repellendus ab natus! Explicabo minus voluptatem sequi excepturi inventore autem dolor'
    },
    {
      nombre:'Martha',
      cargo: 'CEO',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum qui nostrum quas eveniet molestiae distinctio rerum, est tenetur, repellendus ab natus! Explicabo minus voluptatem sequi excepturi inventore autem dolor'
    }
  ]

  constructor() {
    console.log('El servicio está funcionando');
  }

  obtenerEquipo(){
    return this.equipo;
  }
}
