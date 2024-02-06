import { Inject, Injectable } from '@angular/core';
import { MY_USER_TOKEN } from '../injection-token';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(@Inject(MY_USER_TOKEN) userToken: string) { }
}
