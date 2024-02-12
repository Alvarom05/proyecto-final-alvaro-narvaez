import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs-example',
  templateUrl: './rxjs-example.component.html',
  styleUrl: './rxjs-example.component.scss'
})
export class RxjsExampleComponent {

  loading = false;

  users: string[] = [];
  getUsersSubscription?: Subscription

  constructor() {
    console.log('Se instancio el componente');

    setTimeout(() => {
      console.log('Timeout!')
    }, 1000);

    console.log('----FIN----')

    


  // this.getUsersFromPromise();
  this.getUsersFromObservable();
  }

  getUsersFromObservable(): void {
    this.loading = true
    const getUsers$ = new Observable<string[]>((subscriber) => {
      setTimeout(() => {
        subscriber.next(['Carlos', 'Lucio', 'Dailyn', 'Nogalis', 'Enrique', 'Nino'])
      }, 2000);

      setInterval(() => {
        subscriber.next(['Carlos', 'Lucio', 'Dailyn', 'Nogalis', 'Enrique', 'Nino']);
        subscriber.complete();
      }, 1000);

    })

    this.getUsersSubscription = getUsers$.subscribe({
      next: (respuesta) => {
        this.users = respuesta
      },
      error: () => {},
      complete: () => {
        this.loading = false;
      },
    })
  }
}

//   getUsersFromPromise(): void {

//     const getUsers = new Promise<string []>((resolve, reject) => {
//       setTimeout(() => {
//         resolve(['Carlos', 'Lucio', 'Dailyn', 'Nogalis', 'Enrique', 'Nino']);
//       }, 2000)
//     });

//     this.loading= true
//     getUsers

//       .then((respuesta) => {
//         this.users = respuesta;
//       })

//       .catch((error) => console.error(error))

//       .finally(() => {
//         this.loading = false;
//       });

//   }
// }
