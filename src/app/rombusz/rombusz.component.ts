// <!-- /*
// * File: rombusz.component.ts
// * Author: Szép Andor
// * Copyright: 2026, Szép Andor
// * Group: Szoft IIN
// * Date: 2026-10-12
// * Github: https://github.com/andorbandi/
// * Licenc: MIT
// */ -->

import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-rombusz',
  styleUrl: './rombusz.component.css',
  templateUrl: './rombusz.component.html',
})
export class RombuszComponent {
  builder = inject(FormBuilder);

  rombuszForm = this.builder.group({
    diagonalE: ['', [Validators.required, Validators.min(1)]],
    diagonalF: ['', [Validators.required, Validators.min(1)]],
    area: ['']
  });

  showArea = false;

  calculate() {
    this.rombuszForm.markAllAsTouched()

    if(this.rombuszForm.valid) {
      const diagonalE = Number(this.rombuszForm.value.diagonalE);
      const diagonalF = Number(this.rombuszForm.value.diagonalF);
      const area = this.calculateArea(diagonalE, diagonalF);
      this.rombuszForm.get('area')?.setValue(String(area));
      this.showArea = true;
    };
  };

  calculateArea(diaognalE: number, diagonalF: number): number {
    return diaognalE * diagonalF / 2;
  };

}
