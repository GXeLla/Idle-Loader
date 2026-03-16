import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SettingsService {
  /** Whether animations are enabled */
  private _animationsEnabled = new BehaviorSubject(true);
  animationsEnabled$ = this._animationsEnabled.asObservable();

  toggleAnimations(value: boolean) {
    this._animationsEnabled.next(value);
  }

  get animationsEnabled() {
    return this._animationsEnabled.value;
  }
}
