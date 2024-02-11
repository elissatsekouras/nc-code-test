import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { debounceTime, fromEvent } from 'rxjs';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: 'app-event-name',
  standalone: true,
  imports: [],
  providers: [HelperService],
  template: `
    <h1 #flexFontElement class="resizable-text">Time to {{ title }}</h1>
  `,
  styleUrl: './event-name.component.scss',
})
export class EventNameComponent {
  constructor(public helpers: HelperService) {}

  @Input() title!: string;
  @ViewChild('flexFontElement') flexFontElementRef?: ElementRef;

  private resizeListener: any;

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

  ngOnChanges() {
    this.helpers.flexFont(
      'resizable-parent',
      this.flexFontElementRef?.nativeElement,
    );
  }

  ngOnDestroy() {
    this.resizeListener.unsubscribe();
  }
}
