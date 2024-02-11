import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div></div>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'event-countdown-app';
}
