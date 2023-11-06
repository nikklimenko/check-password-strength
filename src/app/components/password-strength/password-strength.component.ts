import {Component, Input, OnChanges, SimpleChange} from '@angular/core';

@Component({
  selector: 'password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.scss']
})
export class PasswordStrengthComponent implements OnChanges{
  bars: string[] = [];
  @Input() passwordToCheck!: string;
  private colors: string[] = ['darkred', 'orange', 'yellowgreen'];

  ngOnChanges(changes: { [propName: string]: SimpleChange }): void {
    const password = changes['passwordToCheck'].currentValue;
    this.setBarColors(3, '#DDD');
    if (password) {
      const strength = this.checkStrength(password);
      this.setColorForBars(strength);
    }
  }

  checkStrength(password: string) {
    const minPasswordLength: number = 8;
    const regex = /[$-/:-?{-~!"^_@`\[\]]/g;
    const letters = /[a-zA-Zа-яА-Я]+/.test(password);
    const numbers = /[0-9]+/.test(password);
    const symbols = regex.test(password);
    const flags = [letters, numbers, symbols];

    let passedMatches = 0;
    for (const flag of flags) {
      passedMatches += flag ? 1 : 0;
    }

    return (password.length >= minPasswordLength) ? passedMatches : 0;
  }
  private setColorForBars(strength: number): void {
    switch (strength) {
      case 0:
       return this.setBarColors(3, 'darkred');
      case 1:
        return this.setBarColors(1, 'darkred');
      case 2:
        return this.setBarColors(2, 'orange');
      case 3:
        return this.setBarColors(3, 'yellowgreen');
      default:
        return this.setBarColors(3, '#DDD');
    }
  }

  private setBarColors(count: number, color: string) {
    this.bars = Array(count).fill(color);
  }

}
