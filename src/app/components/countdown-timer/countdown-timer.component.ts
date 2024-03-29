import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Subscription, debounceTime, fromEvent, interval } from 'rxjs';
import { HelperService } from '../../services/helper.service';
import { TimeToDDay } from '../../types/time-to-d-day.type';

@Component({
  selector: 'app-countdown-timer',
  standalone: true,
  imports: [],
  providers: [HelperService],
  template: `
    <div #flexFontElement class="countdown-timer resizable-text">
      <span>{{ timeToDDay.daysToDday }} days, </span>
      <span>{{ timeToDDay.hoursToDday }}h, </span>
      <span>{{ timeToDDay.minutesToDday }}m, </span>
      <span>{{ timeToDDay.secondsToDday }}s</span>
    </div>
  `,
  styleUrl: './countdown-timer.component.scss',
})
export class CountdownTimerComponent {
  constructor(private helpers: HelperService) {}

  @Input() dDay!: Date;
  @ViewChild('flexFontElement') flexFontElementRef?: ElementRef;

  private timer: Subscription = new Subscription();
  private resizeListener: any;

  timeToDDay: TimeToDDay = {
    daysToDday: 0,
    hoursToDday: 0,
    minutesToDday: 0,
    secondsToDday: 0,
  };

  ngOnInit() {
    this.timeToDDay = this.helpers.timeToDDay(this.dDay);

    this.timer = interval(1000).subscribe(() => {
      this.timeToDDay = this.helpers.timeToDDay(this.dDay);
    });
  }

  ngAfterViewInit() {
    this.helpers.flexFont(
      'resizable-parent',
      this.flexFontElementRef?.nativeElement,
    );
    this.resizeListener = fromEvent(window, 'resize').pipe(debounceTime(100));
    this.resizeListener.subscribe(() => {
      this.helpers.flexFont(
        'resizable-parent',
        this.flexFontElementRef?.nativeElement,
      );
    });
  }

  ngOnDestroy() {
    this.timer.unsubscribe();
    this.resizeListener.unsubscribe();
  }
}
