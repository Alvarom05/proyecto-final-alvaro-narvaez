import { Component } from '@angular/core';
import { User } from './models';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  displayedColumns: string[] = ['id', 'fullName', 'email','password','role'];
  dataSource: User[] = [
    {
      id: 1,
      firstName: 'Carlos',
      lastName: 'Escobar',
      email: 'carescobar@gmail.com',
      password: '123456',
      role: 'Profesor',
    },
    {
      id: 2,
      firstName: 'Lucio',
      lastName: 'Escalante',
      email: 'lucioescal@gmail.com',
      role: 'Estudiante',
      password: '654321',
      },
  ];

  onUserSubmitted(ev: User): void{
    this.dataSource = [...this.dataSource, {...ev, id: new Date().getTime()}];
    }
}

