import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventNameComponent } from './components/event-name/event-name.component';
import { CountdownTimerComponent } from './components/countdown-timer/countdown-timer.component';
import { InputComponent } from './components/input/input.component';
import { Event } from './types/event.type';
import { LocalStorageService } from './services/local-storage.service';
import { HelperService } from './services/helper.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    EventNameComponent,
    CountdownTimerComponent,
    InputComponent,
  ],
  providers: [HelperService, LocalStorageService],
  template: `
    <main>
      <section class="countdown-app">
        <app-event-name [title]="event.name" />
        <app-countdown-timer [dDay]="event.date" />
        <div class="input-container">
          <app-input
            label="Title"
            type="text"
            placeholder="Name your event"
            [value]="event.name"
            [onChange]="handleTitleChange.bind(this)"
          />
          <app-input
            label="Date"
            type="date"
            value="{{ helpers.formatDate(this.event.date) }}"
            [onChange]="handleDateChange.bind(this)"
          />
        </div>
      </section>
    </main>
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(
    public helpers: HelperService,
    private localStorage: LocalStorageService,
  ) {}

  event: Event = {
    name: "Elissa's 30th BDAY 🎉",
    date: new Date('2024-02-13'),
  };

  ngOnInit() {
    const savedEvent = this.localStorage.getItem('event');
    if (savedEvent) {
      const { name, date } = JSON.parse(savedEvent);
      this.event = {
        name,
        date: new Date(date),
      };
    }
  }

  saveEventToLocalStorage() {
    this.localStorage.setItem('event', JSON.stringify(this.event));
  }

  handleDateChange(e: any) {
    this.event.date = new Date(e.target.value);
    this.saveEventToLocalStorage();
  }

  handleTitleChange(e: any) {
    this.event.name = e.target.value;
    this.saveEventToLocalStorage();
  }
}
