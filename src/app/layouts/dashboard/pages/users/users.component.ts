import { Component } from '@angular/core';
import { User } from './models';
import { UsersService } from '../../../../core/services/users.service';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  displayedColumns: string[] = ['id', 'fullName', 'email', 'role'];
  dataSource: User[] = [
    {
      id: 1,
      firstName: 'Alvaro',
      lastName: 'Narváez',
      email: 'alvarounarvaez@gmail.com',
      role: 'Administrativo',
      password: '4512',
    },
    {
      id: 2,
      firstName: 'Carlos',
      lastName: 'Escobar',
      email: 'carescobar@gmail.com',
      password: '123456',
      role: 'Profesor',
    },
    {
      id: 3,
      firstName: 'Lucio',
      lastName: 'Escalante',
      email: 'lucioescal@gmail.com',
      role: 'Estudiante',
      password: '654321',
    },
    {
      id: 4,
      firstName: 'Dailyn',
      lastName: 'Silva',
      email: 'daysil@gmail.com',
      role: 'Estudiante',
      password: '987456',
    },
    {
      id: 5,
      firstName: 'Nogalis',
      lastName: 'Pérez',
      email: 'enogalis@gmail.com',
      role: 'Administrativo',
      password: '369852',
    },
    {
      id: 6,
      firstName: 'Dalvis',
      lastName: 'Salas',
      email: 'dalsal@gmail.com',
      role: 'Estudiante',
      password: '32145',
    },
    {
      id: 7,
      firstName: 'David',
      lastName: 'Rodríguez',
      email: 'drodriguez@gmail.com',
      role: 'Estudiante',
      password: '98569',
    },
  ];

  constructor(private usersServices: UsersService) {

  }

  onUserSubmitted(ev: User): void{
    this.dataSource = [...this.dataSource, {...ev, id: new Date().getTime()}];
    }
}

