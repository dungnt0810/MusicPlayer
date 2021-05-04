import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OverlayService {
  overlayStatus = new BehaviorSubject<boolean>(false);
  overlayStatus$ = this.overlayStatus.asObservable();

  constructor() {}

  updateOverlayStatus(status: boolean) {
    this.overlayStatus.next(status);
  }
}
