import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {

  private enableSubject : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private enable : Observable<boolean> = this.enableSubject.asObservable();

  constructor() { }

  public show(): void {
    this.enableSubject.next(true);    
  }

  public hide(): void {
    this.enableSubject.next(false);    
  }

  public classOverlay() : Observable<boolean> {
    return this.enable;
  }

}
