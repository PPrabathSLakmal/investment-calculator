import { Component, input } from '@angular/core';
import { InvestmentInput } from '../investment-input.modal';

@Component({
  selector: 'app-investment-result',
  imports: [],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.scss',
})
export class InvestmentResultComponent {
  resultData = input<
    {
      year: number;
      interest: number;
      valueEndOfYear: number;
      annualInvestment: number;
      totalInterest: number;
      totalAmountInvested: number;
    }[]
  >();
}
