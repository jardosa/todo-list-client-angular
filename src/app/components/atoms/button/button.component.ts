import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, NgIcon],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() fullWidth: boolean = false;
  @Input() text: string = 'Submit';
  @Input() icon: string | null = null;
  @Input() iconPosition: 'left' | 'right' = 'left';
  @Input() error: boolean = false;
  @Input() disabled: boolean = false;
  @Input() type: 'submit' | 'button' = 'submit';
}
