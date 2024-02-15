import { Inject, Injectable } from '@angular/core';
import { MY_USER_TOKEN } from '../injection-token';
import { User } from '../../layouts/dashboard/pages/users/models';
import { Observable, debounce, debounceTime, delay, of, tap } from 'rxjs';
import { AlertsService } from './alerts.service';


const ROLES_DB: string[] = ['Profesor', 'Estudiante', 'Administrativo']

let USERS_DB: User[] = [
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

]

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private alerts: AlertsService) {}

  getRoles(): Observable<string[]> {
    return of(ROLES_DB).pipe(delay(1000));

  }

  getUsers() {
    return of(USERS_DB).pipe(delay(1000));
  }

  createUser(payload: User) {
    USERS_DB.push(payload);
    return this.getUsers();
  }

  deleteUser(userID: number) {
    USERS_DB = USERS_DB.filter((user) => user.id !== userID);
    return this.getUsers().pipe(tap(() => this.alerts.showSuccess('Realizado','Se eliminó correctamente')));

  }
}



