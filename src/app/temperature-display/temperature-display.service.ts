import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TemperatureDisplayService {
  // initial signals
  minTemperature = signal<number>(10);
  maxTemperature = signal<number>(35);
  targetTemperature = signal<number>(19);

  constructor() {}

  // Handler methods if needed for manual update from events
  updateMinTemperature(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.valueAsNumber;
    this.minTemperature.set(value);
    this.targetTemperature.set(value);
  }

  updateMaxTemperature(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.valueAsNumber;
    this.maxTemperature.set(value);
    this.targetTemperature.set(value);
  }

  updateTargetTemperature(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.valueAsNumber;
    if (value <= this.maxTemperature() && value >= this.minTemperature()) {
      this.targetTemperature.set(value);
    }
  }
}
