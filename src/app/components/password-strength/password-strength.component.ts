import { Component } from '@angular/core';

@Component({
  selector: 'password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.scss']
})
export class PasswordStrengthComponent {
  bar1!: string;
  bar2!: string;
  bar3!: string;
}
