import { Component } from '@angular/core';
import { FullNamePipe, UserPipe } from '../../../../shared/full-name.pipe';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss'
})
export class PipesComponent {
  today = new Date();
  
  user: UserPipe = {
    firstName: 'Carlos',
    lastName: 'Escobar'
  };

  constructor(private datePipe: DatePipe, private fullName: FullNamePipe){
    console.log(this.datePipe.transform(this.today, 'short'));
    console.log(this.fullName.transform(this.user));

  }



}

