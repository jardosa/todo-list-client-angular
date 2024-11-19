import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent implements ControlValueAccessor {
  @Input() fullWidth: boolean = false; // Controls width
  @Input() error: boolean = false; // Error state
  @Input() options: { name: string; value: string }[] = []; // Dropdown options
  @Input() class: string = ''; // Additional custom classes
  @Input() disabled: boolean = false; // Disabled state
  @Input() selected: string | null = null

  value: string | null = null; // Selected value

  private onChange: (value: string) => void = () => { };
  private onTouched: () => void = () => { };

  // ControlValueAccessor methods
  writeValue(value: string | null): void {
    this.value = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  // Handle value change
  onValueChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.value = target.value;
    this.onChange(this.value);
  }

  // Handle blur event
  onBlur(): void {
    this.onTouched();
  }
}
