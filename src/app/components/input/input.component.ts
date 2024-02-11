import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  template: `
    <label>
      <span class="title" ngIf="label">{{ label }}</span>
      <input
        type="{{ type }}"
        placeholder="{{ placeholder }}"
        value="{{ value }}"
        (input)="onChange($event)"
      />
    </label>
  `,
  styleUrl: './input.component.scss',
})
export class InputComponent {
  @Input() label?: string;
  @Input() placeholder?: string;
  @Input() type!: string;
  @Input() value!: any;
  @Input() onChange!: (event: any) => void;
}
