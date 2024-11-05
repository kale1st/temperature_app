import { Component } from '@angular/core';
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

  //These are initial values and can also be retrieved from the database if needed.
  minTemperature: number = 10;
  maxTemperature: number = 30;
  targetTemperature: number = 20;
}
