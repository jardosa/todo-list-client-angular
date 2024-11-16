import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() error: boolean = false;
  @Input() disabled: boolean = false;
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Input() className: string = '';
}
