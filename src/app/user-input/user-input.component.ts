import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import type { InvestmentInput } from '../investment-input.modal';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss',
})
export class UserInputComponent {
  calcular = output<InvestmentInput>();
  enterdInitialInvestment = '0';
  enteredAnualInvestment = '0';
  enteredExpectedReturn = '0';
  enteredDuration = '0';
  onSubmit() {
    this.calcular.emit({
      initialInvestment: +this.enterdInitialInvestment,
      annualInvestment: +this.enteredAnualInvestment,
      expectedReturn: +this.enteredExpectedReturn,
      duration: +this.enteredDuration,
    });
  }
}
