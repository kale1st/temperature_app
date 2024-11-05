import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemperatureDisplayComponent } from './temperature-display/temperature-display.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TemperatureDisplayComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'temperature_app';
  // initial signals
  minTemperature = signal<number>(10);
  maxTemperature = signal<number>(35);
  targetTemperature = signal<number>(19);

  // Handler methods if needed for manual update from events
  updateMinTemperature(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.valueAsNumber;
    this.minTemperature.set(value);
  }

  updateMaxTemperature(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.valueAsNumber;
    this.maxTemperature.set(value);
  }

  updateTargetTemperature(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.valueAsNumber;
    this.targetTemperature.set(value);
  }
}
