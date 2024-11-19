import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() error: boolean = false;
  @Input() type: string = 'text'; // Input type (e.g., text, password, email)
  @Input() placeholder: string = ''; // Input placeholder
  @Input() class: string = ''; // Additional CSS classes
  @Input() disabled: boolean = false; // Whether the input is disabled

  value: string = ''; // The current value of the input

  // Callbacks for Angular forms
  private onChange: (value: string) => void = () => { };
  private onTouched: () => void = () => { };

  // Called when the form needs to write a value to the input
  writeValue(value: string): void {
    this.value = value || ''; // Set the internal value
  }

  // Called when the form needs to register a change event
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  // Called when the form needs to register a touch event
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  // Called when Angular sets the disabled state
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  // Handle input change
  onInputChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.onChange(this.value); // Notify Angular of the value change
  }

  // Handle blur event
  onBlur(): void {
    this.onTouched(); // Notify Angular that the input has been touched
  }
}
