import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-temperature-display',
  standalone: true,
  imports: [],
  templateUrl: './temperature-display.component.html',
  styleUrl: './temperature-display.component.css',
})
export class TemperatureDisplayComponent {
  @Input() minTemperature!: number;
  @Input() maxTemperature!: number;
  @Input() targetTemperature!: number;

  // angle of the pointer
  calculateRotation(target?: number): number {
    const range = this.maxTemperature - this.minTemperature;
    const temperature = target ?? this.targetTemperature;

    if (range === 0) return -135; // Avoid division by zero

    // Calculate the percentage of the temperature within the range
    const percentage = (temperature - this.minTemperature) / range;

    // Map percentage to the 270-degree sweep (-135 to +135 degrees)
    return percentage * 270 - 135;
  }
}
