import { Component } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  mail: string;
  rol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Carlos Escobar', mail: 'cescobar@gmail.com', rol: 'Profesor'},
  {position: 2, name: 'Dailyn Silva', mail: 'daysilva@gmail.com', rol: 'Estudiante'},
  {position: 3, name: 'Nogalis Pérez', mail: 'nogaperez@gmail.com', rol: 'Profesor'},
  {position: 4, name: 'Lucio Escalante', mail: 'lucescalante@gmail.com', rol: 'Estudiante'},
  {position: 5, name: 'Darwin Salas', mail: 'darwsal@gmail.com', rol: 'Estudiante'},
];


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  displayedColumns: string[] = ['position', 'name', 'mail', 'rol'];
  dataSource = [ELEMENT_DATA];
}
