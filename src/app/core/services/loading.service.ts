import { Injectable } from "@angular/core";
import { Subject } from "rxjs";


@Injectable({ providedIn: 'root' })
export class LoadingService {
    loadingTriggered$ = new Subject<boolean>();

    setIsLoading(value: boolean): void {
        this.loadingTriggered$.next(value);
    }
}