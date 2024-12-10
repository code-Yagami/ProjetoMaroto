import { InputComponentComponent } from './../../../components/form-components/input-component/input-component.component';
import { Component } from '@angular/core';
import { CardComponent } from '../../../components/form-components/card/card.component';
import { SelectComponentComponent } from '../../../components/form-components/select-component/select-component.component';
import { TableComponent } from '../../../components/form-components/table/table.component';

@Component({
  selector: 'app-cd',
  standalone: true,
  imports: [InputComponentComponent, CardComponent, SelectComponentComponent, TableComponent],
  templateUrl: './cd.component.html',
  styleUrl: './cd.component.scss'
})
export class CdComponent {

  tableData = [
    {
      nome: 'Expression Studio 4 Premium',
      serial: 'C44HB-2VGYW-GXQKM-WKCVH-6YYJ6',
      numCds: 1,
      linguagem: 'eng',
      tipo: 'Aplicações',
      status: 'Disponível',
      acoes: 'Solicitar',
    },
    {
      nome: 'Office Professional 2007',
      serial: 'VKB8P-6FX4J-7JRYW-897H6-6XPHQ',
      numCds: 1,
      linguagem: 'br / eng',
      tipo: 'Aplicações',
      status: 'Não Disponível',
      acoes: 'Lista Espera',
    },
    {
      nome: 'Office Project Professional 2007',
      serial: 'TJXDC-BBPWV-2C7BP-R69VR-VC3DQ',
      numCds: 1,
      linguagem: 'br / eng',
      tipo: 'Aplicações',
      status: 'Não Disponível',
      acoes: 'Lista Espera',
    },
  ];
  linguagemOptions!: any[];
  tipoOptions!: any[];
  statusOptions!: any[];
}
