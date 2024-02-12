import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import Swal, { SweetAlertOptions } from "sweetalert2";


@Injectable({ providedIn: 'root' })
export class AlertsService {
    private notification$ = new Subject<SweetAlertOptions>()


    constructor() {
        this.notification$.subscribe({
            next: (options) => {
                Swal.fire(options);
            }
        })
    }

    showAlert(options: SweetAlertOptions): void {
        this.notification$.next(options);
    }
}
