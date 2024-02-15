import { Component, OnInit } from '@angular/core';
import { User } from './models';
import { UsersService } from '../../../../core/services/users.service';
import { LoadingService } from '../../../../core/services/loading.service';
import { forkJoin } from 'rxjs';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit{
  displayedColumns: string[] = ['id', 'fullName', 'email', 'role', 'actions'];
  dataSource: User[] = [];
  roles: string[] = [];

  constructor(
    private usersServices: UsersService,
    private loadingService: LoadingService
    ) {}

  ngOnInit(): void {
    this.getPagesData();

  }

  getPagesData(): void {
    this.loadingService.setIsLoading(true);

    forkJoin([
      this.usersServices.getRoles(),
      this.usersServices.getUsers(),
    ]).subscribe({
      next: (value) => {
        this.roles = value[0];
        this.dataSource = value[1];
      },
      complete: () => {
        this.loadingService.setIsLoading(false);
      }
    });
  }

  onDeleteUser(ev: User): void {
    this.loadingService.setIsLoading(true);
    this.usersServices.deleteUser(ev.id).subscribe({
      next: (users) => {
        this.dataSource = [...users];
      },
      complete: () => {
        this.loadingService.setIsLoading(false);
      }
    });
  }

  onUserSubmitted(ev: User): void {
    // this.dataSource = [...this.dataSource, {...ev, id: new Date().getTime()}];
    this.loadingService.setIsLoading(true);
    this.usersServices.createUser({...ev, id: new Date().getTime()}).subscribe({
      next: (users) => {
        this.dataSource = [...users];
      },
      complete: () => {
        this.loadingService.setIsLoading(false);
      }
    });
    }
}

