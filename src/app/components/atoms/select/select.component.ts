import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent {
  @Input() fullWidth: boolean = false; // Controls width
  @Input() error: boolean = false; // Error state
  @Input() options: { name: string; value: string }[] = []; // Dropdown options
  @Input() value: string | null = null; // Selected value
  @Input() className: string = ''; // Additional custom classes
  @Output() valueChange = new EventEmitter<string>(); // Emits value changes

  onValueChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.valueChange.emit(target.value)
  }
}
