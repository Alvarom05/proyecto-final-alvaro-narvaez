import { Component } from '@angular/core';

@Component({
  selector: 'app-rxjs-example',
  templateUrl: './rxjs-example.component.html',
  styleUrl: './rxjs-example.component.scss'
})
export class RxjsExampleComponent {

  constructor() {
    console.log('Se instancio el componente');
    
    setTimeout(() => {
      console.log('Timeout!')
    }, 1000);

    console.log('----FIN----')

    const getUsers = new Promise((resolve, reject) => {
      setTimeout(() =>{
        resolve([
          'Carlos',
          'Lucio',
          'Dailyn',
          'Nogalis',
          'Enrique',
          'Nino',
        ]);
      }, 2000)
    });

    getUsers
    
    .then()
    .catch()
    .finally()
  }
}
