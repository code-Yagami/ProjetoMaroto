import { Component } from '@angular/core';

@Component({
  selector: 'app-cargos-pretendidos',
  templateUrl: './cargos-pretendidos.component.html',
  styleUrls: ['./cargos-pretendidos.component.scss'],
})
export class CargosPretendidosComponent {
  selectedRoles: string[] = [];
  otherRoles: string = '';

  save(): void {
    const allRoles = [...this.selectedRoles];
    if (this.otherRoles.trim()) {
      allRoles.push(...this.otherRoles.split(',').map((role) => role.trim()));
    }

    console.log('Cargos selecionados:', allRoles);
    alert('Cargos salvos com sucesso!');
  }
}
