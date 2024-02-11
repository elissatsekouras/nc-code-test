import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event-name',
  standalone: true,
  imports: [],
  template: `
    <h1 class="fit-to-width-font resizable-text">Time to {{ title }}</h1>
  `,
  styleUrl: './event-name.component.scss',
})
export class EventNameComponent {
  @Input() title!: string;
}
