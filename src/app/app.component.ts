import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemperatureDisplayComponent } from './temperature-display/temperature-display.component';
import { FormsModule } from '@angular/forms';
import { TemperatureDisplayService } from './temperature-display/temperature-display.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TemperatureDisplayComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'temperature_app';

  constructor(public temSer: TemperatureDisplayService) {}
}
