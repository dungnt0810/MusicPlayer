import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private scrollPosition = new BehaviorSubject<number>(0);
  public scrollPosition$ = this.scrollPosition.asObservable();

  constructor() {}

  updateScrollPosition(position: number) {
    this.scrollPosition.next(position);
  }
}
